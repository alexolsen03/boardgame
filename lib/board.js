let COLUMNS = 'abcdefghij'.split(''),
     START_FEN =  'skmassamks/10/10/10/10/10/10/10/10/SKMASSAMKS',
     START_BOARD_FEN = '10/10/10/3w6/10/5h4/10/10/10/10',
     START_BOARD_POSITION = fenBoardToObj(START_BOARD_FEN),
     START_POSITION = fenToObj(START_FEN),
     CURRENT_POSITION;

let SQUARE_SIZE,
     SQUARE_ELS_IDS = {},
     SQUARE_ELS_OFFSETS,
     DRAGGED_PIECE,
     DRAGGED_PIECE_LOCATION,
     DRAGGED_PIECE_SOURCE,
     DRAGGING_A_PIECE = false;

let  cfg,
      containerElId,
      containerEl,
      boardEl,
      draggedPieceEl;

// use unique class names to prevent clashing with anything else on the page
// and simplify selectors
// NOTE: these should never change
var CSS = {
  alpha: 'alpha-d2270',
  teamA: 'teamA-3c85d',
  board: 'board-b72b1',
  tilemageboard: 'tilemageboard-63f37',
  clearfix: 'clearfix-7da63',
  highlight1: 'highlight1-32417',
  highlight2: 'highlight2-9c5d2',
  notation: 'notation-322f9',
  numeric: 'numeric-fc462',
  piece: 'piece-417db',
  row: 'row-5277c',
  sparePieces: 'spare-pieces-7492f',
  sparePiecesBottom: 'spare-pieces-bottom-ae20f',
  sparePiecesTop: 'spare-pieces-top-4028b',
  square: 'square-55d63',
  teamB: 'teamB-1e1d7',
  land: 'land0',
  water: 'water0',
  hill: 'land1',
  unit: 'unit-a2H1d',
};

function load(containerElId, config){
	cfg = config || {};

	if(!cfg.position || cfg.position === 'start')
		cfg.position = START_FEN;

	cfg.pieceTheme = 'public/img/{piece}.png';

	CURRENT_POSITION = fenToObj(cfg.position);

	containerElId = containerElId;

	let ele = document.getElementById(containerElId);
	containerEl = $(ele);

	SQUARE_SIZE = calculateSquareSize();
	createElIds();

	// create the drag piece
	  var draggedPieceId = uuid();
	  $('body').append(buildPiece('aS', true, draggedPieceId));
	  draggedPieceEl = $('#' + draggedPieceId);
	  console.log(draggedPieceEl);

	containerEl.html(buildBoardContainer());
	boardEl = containerEl.find('.' + CSS.board);

	boardEl.html(buildBoard());
	drawPositionInstant();

	addEvents();
}

function mouseenterSquare(e) {
  // do not fire this event if we are dragging a piece
  // NOTE: this should never happen, but it's a safeguard
  if (DRAGGING_A_PIECE !== false) return;

  // get the square
  var square = $(e.currentTarget).attr('data-square');

  // NOTE: this should never happen; defensive
  if (validSquare(square) !== true) return;

  // get the piece on this square
  var piece = false;
  if (CURRENT_POSITION.hasOwnProperty(square) === true) {
    piece = CURRENT_POSITION[square];
  }

}

function mouseleaveSquare(e) {
  // do not fire this event if we are dragging a piece
  // NOTE: this should never happen, but it's a safeguard
  if (DRAGGING_A_PIECE !== false) return;

  // get the square
  var square = $(e.currentTarget).attr('data-square');

  // NOTE: this should never happen; defensive
  if (validSquare(square) !== true) return;

  // get the piece on this square
  var piece = false;
  if (CURRENT_POSITION.hasOwnProperty(square) === true) {
    piece = CURRENT_POSITION[square];
  }

}

/********************************
	      BUILDING
*********************************/

function buildBoardContainer() {
	var html = '<div class="' + CSS.tilemageboard + '">';

	if (cfg.sparePieces === true) {
		html += '<div class="' + CSS.sparePieces + ' ' +
				CSS.sparePiecesTop + '"></div>';
	}

	html += '<div class="' + CSS.board + '"></div>';

	if (cfg.sparePieces === true) {
		html += '<div class="' + CSS.sparePieces + ' ' +
	  		CSS.sparePiecesBottom + '"></div>';
	}

	html += '</div>';

	return html;
}

function buildBoard(){
	let html = '';

	var alpha = deepCopy(COLUMNS);
	let row = 10; // TEAM A ORIENTATION

	for(let i=0; i<10; i++){

		html += '<div class="' + CSS.row + '">';

		for(let j=0; j<10; j++){
			let square = alpha[j] + row;

			let tileType = START_BOARD_POSITION[square] === undefined ? CSS.land : START_BOARD_POSITION[square] === 'w' ? CSS.water : CSS.hill;

			html += '<div class="' + CSS.square + ' ' + tileType + ' ' +
				        'square-' + square + '" ' +
				        'style="width: ' + SQUARE_SIZE + 'px; height: ' + SQUARE_SIZE + 'px" ' +
				        'id="' + SQUARE_ELS_IDS[square] + '" ' +
				        'data-square="' + square + '">';


			html += '</div>';

		}

		html += '<div class="' + CSS.clearfix + '"></div></div>';

			row--;
	}

	return html;
}

function addEvents(){
	$('body').on('mousedown mousemove', '.' + CSS.piece, stopDefault);

	// mouse drag pieces
	boardEl.on('mousedown', '.' + CSS.square, mousedownSquare);

	// mouse enter / leave square
	boardEl.on('mouseenter', '.' + CSS.square, mouseenterSquare)
	    .on('mouseleave', '.' + CSS.square, mouseleaveSquare);

	$(window).on('mousemove', mousemoveWindow)
      		.on('mouseup', mouseupWindow);
}

// calculates square size based on the width of the container
// got a little CSS black magic here, so let me explain:
// get the width of the container element (could be anything), reduce by 1 for
// fudge factor, and then keep reducing until we find an exact mod 10 for
// our square size
function calculateSquareSize() {
  var containerWidth = parseInt(containerEl.width(), 10);

  // defensive, prevent infinite loop
  if (! containerWidth || containerWidth <= 0) {
    return 0;
  }

  // pad one pixel
  var boardWidth = containerWidth - 1;

  while (boardWidth % 10 !== 0 && boardWidth > 0) {
    boardWidth--;
  }

  return (boardWidth / 10);
}

// create random IDs for elements
function createElIds() {
  // squares on the board
  for (var i = 0; i < COLUMNS.length; i++) {
    for (var j = 1; j <= 10; j++) {
      var square = COLUMNS[i] + j;
      SQUARE_ELS_IDS[square] = square + '-' + uuid();
    }
  }
}

function buildPiece(piece, hidden, id) {
	let team = piece.charAt(0) === 'a' ? CSS.teamA : CSS.teamB;

	var html = '<div id="' + id + '" class="' + CSS.unit + ' ' + team + '"' +
			'style="height: ' + SQUARE_SIZE / 1.5 + 'px;' +
			'width: ' + SQUARE_SIZE / 1.5+ 'px; ';

	if (hidden === true) {
	    	html += 'display:none;">';
	}else{
		html+='">';
	}

  	html += '<img src="' + buildPieceImgSrc(piece) + '" ';

  	html += 'alt="" ' +
		  'class="' + CSS.piece + '" ' +
		  'data-piece="' + piece + '" ' +
		  'style="max-width: ' + SQUARE_SIZE / 2+ 'px;' +
		  'max-height: ' + SQUARE_SIZE / 2 + 'px;';

	if (hidden === true) {
	    	html += 'display:none;';
	}

  	html += '" />';

  	html+='</div>'

  	return html;
}

function buildPieceImgSrc(piece){
	return cfg.pieceTheme.replace(/{piece}/g, piece);
}


/********************************
	      STATE
*********************************/

function drawPositionInstant() {
  // clear the board
  boardEl.find('.' + CSS.piece).remove();
  // add the pieces
  for (var i in CURRENT_POSITION) {
    if (CURRENT_POSITION.hasOwnProperty(i) !== true) continue;

    $('#' + SQUARE_ELS_IDS[i]).append(buildPiece(CURRENT_POSITION[i]));
  }
}

/********************************
	      EVENTS
*********************************/
function mouseupWindow(e) {
  // do nothing if we are not dragging a piece
  if (DRAGGING_A_PIECE !== true) return;

  // get the location
  var location = isXYOnSquare(e.pageX, e.pageY);

  stopDraggedPiece(location);
}

function stopDraggedPiece(location) {
  // determine what the action should be
  var action = 'drop';
  if (location === 'offboard' && cfg.dropOffBoard === 'snapback') {
    action = 'snapback';
  }
  if (location === 'offboard' && cfg.dropOffBoard === 'trash') {
    action = 'trash';
  }

  // run their onDrop function, which can potentially change the drop action
  if (cfg.hasOwnProperty('onDrop') === true &&
    typeof cfg.onDrop === 'function') {
    var newPosition = deepCopy(CURRENT_POSITION);

    // source piece is a spare piece and position is off the board
    //if (DRAGGED_PIECE_SOURCE === 'spare' && location === 'offboard') {...}
    // position has not changed; do nothing

    // source piece is a spare piece and position is on the board
    if (DRAGGED_PIECE_SOURCE === 'spare' && validSquare(location) === true) {
      // add the piece to the board
      newPosition[location] = DRAGGED_PIECE;
    }

    // source piece was on the board and position is off the board
    if (validSquare(DRAGGED_PIECE_SOURCE) === true && location === 'offboard') {
      // remove the piece from the board
      delete newPosition[DRAGGED_PIECE_SOURCE];
    }

    // source piece was on the board and position is on the board
    if (validSquare(DRAGGED_PIECE_SOURCE) === true &&
      validSquare(location) === true) {
      // move the piece
      delete newPosition[DRAGGED_PIECE_SOURCE];
      newPosition[location] = DRAGGED_PIECE;
    }

    var oldPosition = deepCopy(CURRENT_POSITION);

    action = 'snapback';
  }else{
  	console.log('dropping! ' + location);
  }

  // do it!
  if (action === 'snapback') {
    snapbackDraggedPiece();
  }
  else if (action === 'trash') {
    trashDraggedPiece();
  }
  else if (action === 'drop') {
    dropDraggedPieceOnSquare(location);
  }
}

function dropDraggedPieceOnSquare(square) {
  removeSquareHighlights();

  // update position
  var newPosition = deepCopy(CURRENT_POSITION);
  delete newPosition[DRAGGED_PIECE_SOURCE];
  newPosition[square] = DRAGGED_PIECE;
  setCurrentPosition(newPosition);

  // get target square information
  var targetSquarePosition = $('#' + SQUARE_ELS_IDS[square]).offset();

  // animation complete
  var complete = function() {
    drawPositionInstant();
    draggedPieceEl.css('display', 'none');

    // execute their onSnapEnd function
    if (cfg.hasOwnProperty('onSnapEnd') === true &&
      typeof cfg.onSnapEnd === 'function') {
      cfg.onSnapEnd(DRAGGED_PIECE_SOURCE, square, DRAGGED_PIECE);
    }
  };

  // snap the piece to the target square
  var opts = {
    duration: cfg.snapSpeed,
    complete: complete
  };
  draggedPieceEl.animate(targetSquarePosition, opts);

  // set state
  DRAGGING_A_PIECE = false;
}

function mousedownSquare(e) {
	var square = $(this).attr('data-square');
	console.log(square + '?');

	// no piece on this square
	if (validSquare(square) !== true ||
		CURRENT_POSITION.hasOwnProperty(square) !== true) {

    		return;
  	}

  	beginDraggingPiece(square, CURRENT_POSITION[square], e.pageX, e.pageY);
}

function beginDraggingPiece(source, piece, x, y) {
	let moveableSquares = cfg.onDragStart(source,piece);

	moveableSquares.forEach(function(sq){
		$('[data-square="' + sq + '"]').addClass(CSS.highlight1);
	});

  	// set state
  	DRAGGING_A_PIECE = true;
  	DRAGGED_PIECE = piece;
  	DRAGGED_PIECE_SOURCE = source;

  	// capture the x, y coords of all squares in memory
  	captureSquareOffsets();

  	let team = piece.charAt(0);

  	// create the dragged piece
  	draggedPieceEl.find('img').attr('src', buildPieceImgSrc(piece));
  	draggedPieceEl.find('img').css({display: ''})
	draggedPieceEl.css({
			display: '',
			position: 'absolute',
			left: x - (SQUARE_SIZE / 2),
			top: y - (SQUARE_SIZE / 2),
			margin: 0
	});

	draggedPieceEl.removeClass(CSS.teamA);
	draggedPieceEl.removeClass(CSS.teamB);

	draggedPieceEl.addClass(team === 'a' ? CSS.teamA : CSS.teamB);

	  if (source !== 'spare') {
    		// highlight the source square and hide the piece
    		$('#' + SQUARE_ELS_IDS[source]).addClass(CSS.highlight1)
      		    .find('.' + CSS.unit).css('display', 'none');
  	}
}

function mousemoveWindow(e) {
  // do nothing if we are not dragging a piece
  if (DRAGGING_A_PIECE !== true) return;

  updateDraggedPiece(e.pageX, e.pageY);
}

function updateDraggedPiece(x, y) {
  // put the dragged piece over the mouse cursor
  draggedPieceEl.css({
    left: x - (SQUARE_SIZE / 2),
    top: y - (SQUARE_SIZE / 2)
  });

  // get location
  var location = isXYOnSquare(x, y);

  // do nothing if the location has not changed
  if (location === DRAGGED_PIECE_LOCATION) return;

  // remove highlight from previous square
  if (validSquare(DRAGGED_PIECE_LOCATION) === true) {
    $('#' + SQUARE_ELS_IDS[DRAGGED_PIECE_LOCATION])
      .removeClass(CSS.highlight2);
  }

  // add highlight to new square
  if (validSquare(location) === true) {
    $('#' + SQUARE_ELS_IDS[location]).addClass(CSS.highlight2);
  }

  // update state
  DRAGGED_PIECE_LOCATION = location;
}

/********************************
	UTILITY FUNCTIONS
*********************************/

// convert FEN string to position object
// returns false if the FEN string is invalid
function fenToObj(fen) {

  var rows = fen.split('/');
  var position = {};

  var currentRow = 10;
  for (var i = 0; i < 10; i++) {
    var row = rows[i].split('');
    var colIndex = 0;

    // loop through each character in the FEN section
    for (var j = 0; j < row.length; j++) {
      // number / empty squares
      if (is_digit(row[j])){

      	let num = row[j];

      	if(row[j] === '1'){

      		if(row[j+1] === 0){	// need to check for double digits
      			num = row[j] + row[j+1];
      		}
      	}

        	var emptySquares = parseInt(num, 10);
        	colIndex += emptySquares;
      }
      // piece
      else {
      	if(!is_digit(row[j])){
	        var square = COLUMNS[colIndex] + currentRow;
	        position[square] = fenToPieceCode(row[j]);
	        colIndex++;
	}
      }
    }

    currentRow--;
  }

  return position;
}

function fenBoardToObj(fen) {
  var rows = fen.split('/');
  var position = {};

  var currentRow = 10;
  for (var i = 0; i < 10; i++) {
    var row = rows[i].split('');
    var colIndex = 0;

    // loop through each character in the FEN section
    for (var j = 0; j < row.length; j++) {
      // number / empty squares
      if (is_digit(row[j])){

      	let num = row[j];

      	if(row[j] === '1'){

      		if(row[j+1] === 0){	// need to check for double digits
      			num = row[j] + row[j+1];
      		}
      	}

        	var emptySquares = parseInt(num, 10);
        	colIndex += emptySquares;
      }
      // tile
      else {
      	if(!is_digit(row[j])){
	        	var square = COLUMNS[colIndex] + currentRow;
	        	position[square] = row[j];
	}
	colIndex++;
      }
    }

    currentRow--;
  }

  return position;
}

// convert FEN piece code to bP, wK, etc
function fenToPieceCode(piece) {
  // black piece
  if (piece.toLowerCase() === piece) {
    return 'b' + piece.toUpperCase();
  }

  // white piece
  return 'a' + piece.toUpperCase();
}

// position object to FEN string
// returns false if the obj is not a valid position object
function objToFen(obj) {
  if (validPositionObject(obj) !== true) {
    return false;
  }

  var fen = '';

  var currentRow = 10;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var square = COLUMNS[j] + currentRow;

      // piece exists
      if (obj.hasOwnProperty(square) === true) {
        fen += pieceCodeToFen(obj[square]);
      }

      // empty space
      else {
        fen += '1';
      }
    }

    if (i !== 9) {
      fen += '/';
    }

    currentRow--;
  }

  // squeeze the numbers together
  // haha, I love this solution...
  fen = fen.replace(/1111111111/g, '10');
  fen = fen.replace(/111111111/g, '9');
  fen = fen.replace(/11111111/g, '8');
  fen = fen.replace(/1111111/g, '7');
  fen = fen.replace(/111111/g, '6');
  fen = fen.replace(/11111/g, '5');
  fen = fen.replace(/1111/g, '4');
  fen = fen.replace(/111/g, '3');
  fen = fen.replace(/11/g, '2');

  return fen;
}

function deepCopy(thing) {
  return JSON.parse(JSON.stringify(thing));
}

function is_digit(c) {
	return '0123456789'.indexOf(c) !== -1;
}

// http://tinyurl.com/3ttloxj
function uuid() {
  return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function(c) {
    var r = Math.random() * 16 | 0;
    return r.toString(16);
  });
}

function validSquare(square) {
  if (typeof square !== 'string') return false;

  return (square.search(/[a-j]([1-9]|10)/) !== -1);
}

function validPositionObject(pos) {
  if (typeof pos !== 'object') return false;

  for (var i in pos) {
    if (pos.hasOwnProperty(i) !== true) continue;

    if (validSquare(i) !== true || validPieceCode(pos[i]) !== true) {
      return false;
    }
  }

  return true;
}

function validPieceCode(code) {
  if (typeof code !== 'string') return false;
  return (code.search(/[ab][SMKA]/) !== -1);
}

// convert bP, wK, etc code to FEN structure
function pieceCodeToFen(piece) {
  var tmp = piece.split('');

  // white piece
  if (tmp[0] === 'a') {
    return tmp[1].toUpperCase();
  }

  // black piece
  return tmp[1].toLowerCase();
}

function stopDefault(e) {
  e.preventDefault();
}

// records the XY coords of every square into memory
function captureSquareOffsets() {
  SQUARE_ELS_OFFSETS = {};

  for (var i in SQUARE_ELS_IDS) {
    if (SQUARE_ELS_IDS.hasOwnProperty(i) !== true) continue;

    SQUARE_ELS_OFFSETS[i] = $('#' + SQUARE_ELS_IDS[i]).offset();
  }
}

function isXYOnSquare(x, y) {
  for (var i in SQUARE_ELS_OFFSETS) {
    if (SQUARE_ELS_OFFSETS.hasOwnProperty(i) !== true) continue;

    var s = SQUARE_ELS_OFFSETS[i];
    if (x >= s.left && x < s.left + SQUARE_SIZE &&
        y >= s.top && y < s.top + SQUARE_SIZE) {
      return i;
    }
  }

  return 'offboard';
}

function setCurrentPosition(position) {
  var oldPos = deepCopy(CURRENT_POSITION);
  var newPos = deepCopy(position);
  var oldFen = objToFen(oldPos);
  var newFen = objToFen(newPos);

  // do nothing if no change in position
  if (oldFen === newFen) return;

  // run their onChange function
  if (cfg.hasOwnProperty('onChange') === true &&
    typeof cfg.onChange === 'function') {
    cfg.onChange(oldPos, newPos);
  }

  // update state
  CURRENT_POSITION = position;
}

function removeSquareHighlights() {
  boardEl.find('.' + CSS.square)
    .removeClass(CSS.highlight1 + ' ' + CSS.highlight2);
}

export { load };