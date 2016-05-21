'use strict';

const TEAM_A = 'r';
const TEAM_B = 'w';

const MAX_ACTIONS_ALLOWED = 2;

const SOLDIER = 's';
const KNIGHT 	 = 'k';
const MAGE     = 'm';
const ARCHER = 'a';

const DIMENSIONS = 10;

const FILE_TO_NUM = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
	i: 8,
	j: 9
}

const RANKS = {
	'1': [0,1,2,3,4,5,6,7,8,9],
	'2': [10,11,12,13,14,15,16,17,18,19],
	'3': [20,21,22,23,24,25,26,27,28,29],
	'4': [30,31,32,33,34,35,36,37,38,39],
	'5': [40,41,42,43,44,45,46,47,48,49],
	'6': [50,51,52,53,54,55,56,57,58,59],
	'7': [60,61,62,63,64,65,66,67,68,69],
	'8': [70,71,72,73,74,75,76,77,78,79],
	'9': [80,81,82,83,84,85,86,87,88,89],
	'10:': [90,91,92,93,94,95,96,97,98,99]
}

const  FILES = {
	'a': [0,10,20,30,40,50,60,70,80,90],
	'b': [1,11,21,31,41,51,61,71,81,91],
	'c': [2,12,22,32,42,52,62,72,82,92],
	'd': [3,13,23,33,43,53,63,73,83,93],
	'e': [4,14,24,34,44,54,64,74,84,94],
	'f': [5,15,25,35,45,55,65,75,85,95],
	'g': [6,16,26,36,46,56,66,76,86,96],
	'h': [7,17,27,37,47,57,67,77,87,97],
	'i': [8,18,28,38,48,58,68,78,88,98],
	'j': [9,19,29,39,49,59,69,79,89,99]
}

const RANK_1   = 9;
const RANK_2   = 8;
const RANK_3   = 7;
const RANK_4   = 6;
const RANK_5   = 5;
const RANK_6   = 4;
const RANK_7   = 3;
const RANK_8   = 2;
const RANK_9   = 1;
const RANK_10 = 0;

const SQUARES = {
a10:   90, b10:  91, c10:   92, d10: 93, e10: 94, f10: 95, g10:  96,  h10:  97,     i10: 98,  j10: 99,
  a9:   80,   b9:   81,   c9:  82, d9:  83, e9:  84, f9:  85, g9:  86,     h9:  87,    i9: 88,    j9: 89,
  a8:   70,   b8:   71,  c8:  72, d8:  73, e8:  74, f8:  75, g8:   76,    h8:   77,   i8: 78,  j8: 79,
  a7:   60,   b7:   61,  c7:  62, d7:  63, e7:   64, f7:  65, g7:  66,      h7:  67,	i7: 68,  j7: 69,
  a6:   50,   b6:   51,   c6:  52, d6:  53, e6:  54, f6:  55, g6:  56,     h6:  57,	i6: 58,  j6: 59,
  a5:   40,   b5:   41,   c5:  42, d5:  43, e5:  44, f5:  45, g5:  46,     h5:  47,	i5: 48,  j5: 49,
  a4:   30,   b4:   31,   c4:  32, d4:  33, e4:  34, f4:  35, g4:  36,     h4:  37,	i4: 38,  j4: 39,
  a3:   20,   b3:   21,   c3:  22, d3:  23, e3:  24, f3:  25, g3:  26,     h3:  27,	i3: 28,  j3: 29,
  a2:   10,   b2:   11,   c2:  12, d2:  13, e2:  14, f2:  15, g2:  16,     h2:  17,	i2: 18,  j2: 19,
  a1:   0,     b1:   1,     c1:    2, d1:  3, e1:  4, f1:  5, g1:  6,     h1:  7,	i1: 8,  j1: 9,
};

const DEFAULT_POSITION = 'SKMASSAMKS/10/10/10/10/10/10/10/10/skmassamks r 0';
const DEFAULT_TERRA_STATE = '10/10/10/10/10/10/10/10/10/10';

class TileMages {

	constructor(fen, boardFen){
		// game objects
		this.board = new Array(100);
		this.terraState = new Array(100);

		// init values
		this.squares = SQUARES;

		// load pieces
		if (typeof fen === 'undefined') {
			this.turn = TEAM_A;
			this.load(DEFAULT_POSITION);
		}else if(fen === 'start') {
			this.turn = TEAM_A;
			this.load(DEFAULT_POSITION);
		}else {
			this.turn = fen.split(' ')[1];
			console.log('turn is! ' + this.turn);
			this.load(fen);
		}

		// load board
		if (typeof boardFen === 'undefined') {
			this.loadTerraState(DEFAULT_TERRA_STATE);
		}else if(fen === 'start') {
			this.loadTerraState(DEFAULT_TERRA_STATE);
		}else {
			this.loadTerraState(boardFen);
		}

		this.turnActions = parseInt(fen.split(' ')[2]);
	}

	load(fen){
		let tokens = fen.split(/\s+/);	// make an array
		let position = tokens[0];
		let square = 0;

		for( let i=0; i<this.board.length; i++){
			let piece = position.charAt(i);

			if(piece === '/'){

			}else if(is_digit(piece)){
				var num = parseInt(piece, 10);

				if(num === 1){
					if(is_digit(fen.charAt(i + 1))){
						num = parseInt(fen.substr(i, i+2), 10);
					}
				}

				square += num;
			}else{
				let color = (piece < 'a') ? TEAM_A : TEAM_B;

				let p = {
					color: color,
					type: piece.toLowerCase(),
					maxMovement: piece.toLowerCase() === 'k' ? 3 : 2,
					maxActions: 2,
					performedActions: 0,
					resetActions: function(){
						this.performedActions = 0;
					},
					getMaxAllowedMovement: function(){
						if(this.performedActions === 0){
							return this.maxMovement;
						}else if(this.performedActions === 1){
							return 1;
						}else{
							return 0;
						}
					}
				};

				this.board[square] = p;

				// need to find a way for the above square to be
				// the right value

				square++;
			}
		}

		console.log('successfully constructed board');
		console.log(this.board);
	}

	loadTerraState(fen){
		let square = 0;

		for( let i=0; i<this.terraState.length; i++){
			let landscape = fen.charAt(i);

			if(landscape === '/'){

			}else if(is_digit(landscape)){
				var num = parseInt(landscape, 10);

				if(num === 1){
					if(is_digit(fen.charAt(i + 1))){
						num = parseInt(fen.substr(i, i+2), 10);
					}
				}

				square += num;
			}else{

				// landscape must be either 'w' or 'h' - water or hill
				this.terraState[square] = landscape;

				// need to find a way for the above square to be
				// the right value

				square++;
			}
		}

		console.log('successfully created terraState');
		console.log(this.terraState);
	}

	put(piece, square){
		this.board[square] = {type: piece.type, color: piece.color};
	}

	generateFen(){
		let fen = '';

		for(let i = 0; i < this.board.length; i++){
			if(!this.board[i]){
				fen += 1;
			}else{
				let color = this.board[i].color;
				let piece = this.board[i].type;

				fen += (color === TEAM_A ? piece.toUpperCase() : piece);
			}

			if(i > 0 && (i+1) % 10 === 0 && i+1<SQUARES.j10){
				fen += '/';
			}
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


		fen += ' ' + this.turn + ' ' + this.turnActions;

		return fen;
	}

	generateBoardFen(){
		let fen = '';

		for(let i = 0; i < this.terraState.length; i++){
			if(!this.terraState[i]){
				fen += 1;
			}else{

				fen += this.terraState[i];
			}

			if(i > 0 && (i+1) % 10 === 0 && i+1<SQUARES.j10){
				fen += '/';
			}
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

	move(move){
		let piece = this.board[SQUARES[move.from]];
		let pieceMaxMoves = piece.getMaxAllowedMovement();
		if(piece.performedActions === 0)
			pieceMaxMoves -= this.turnActions;

		// get ring distance
		let distanceTraveled = findRangeTraveled(move.from, move.to, this.board, this.terraState);
		let actionsTaken = 0;

		if(distanceTraveled === 1){
			piece.performedActions++;
			actionsTaken ++;
		}else if(distanceTraveled === 2){
			if(piece.type === 'k'){
				piece.performedActions ++;
				actionsTaken++;
			}else{
				piece.performedActions += 2;
				actionsTaken += 2;
			}
		}else{
			piece.performedActions += 3;		// should only get here with the knight moving 3
			actionsTaken += 3;
		}

		let validMoves = calculateMoveableSquares(move.from, this.board,this.terraState,[],0,pieceMaxMoves,[], goDirection);
		if(validMoves.indexOf(move.to) !== -1){
			this.board[ SQUARES[move.to]] = this.board[SQUARES[move.from]];
			this.board[SQUARES[move.from]]= null;
		}else{
			console.log(move.from,move.to,' MOVED INVALIDLY!');
			console.log('GAME WILL NOT BE UPDATED PROPERLY');
		}

		// track num of moves made this turn
		this.turnActions += actionsTaken;

		if(this.turnActions >= MAX_ACTIONS_ALLOWED){
			return this.resetTurn();
		}

		//console.log(this.board);
	}

	generateMoveOptions(from){
		let piece = this.board[SQUARES[from]];
		let pieceMaxMoves = piece.getMaxAllowedMovement();
		if(piece.performedActions === 0)
			pieceMaxMoves -= this.turnActions;

		if(piece)
			return calculateMoveableSquares(from, this.board,this.terraState,[],0,pieceMaxMoves,[],goDirection);
	}

	generateMoves(options){

		function add_move(board, moves, from, to, flags) {
		       	moves.push(build_move(board, from, to, flags));
		}


		let moves = [];
		let us = turn;
		let them = swapTeam(us);

		let firstSq = SQUARES.a1;
		let lastSq = SQUARES.j10;

		for(let i=firstSq; i<= lastSq; i++){
			let piece=this.board[i];		// piece object
			let square = this.SQUARES[i];	// square value - ex. a8

			if(piece === null || piece.color !== us){
				console.log('not us!');
				continue;
			}

		}
	}

	generateTerraformOptions(){
		let options = [];
		let me = this;

		for(let i=0; i<this.board.length; i++){
			let piece = this.board[i];

			if(piece &&
			   piece.type === 'm' &&
			   piece.color === me.turn &&
			   piece.performedActions === 0 &&
			   me.turnActions === 0){
				let space = indexToNotation(i);

				let oneAway = getTilesInCircleFrom(indexToNotation(i), 1);
				let twoAway = getTilesInCircleFrom(indexToNotation(i), 2);

				let available = oneAway.concat(twoAway);

				options = options.concat(available);
			}
		}

		return options;
	}

	terraform(type, square){
		console.log(' i have been given ' + type);
		// do nothing if they try to terraform a square as
		// the type it already has
		if(type === this.terraState[SQUARES[square]])
			return;

		this.terraState[SQUARES[square]] = type;

		return this.resetTurn();
	}

	resetTurn(){
		let lostSoldiers = this.conductBattles();
		let spaces = [];

		// remove lost soldiers
		for(let i=0; i<this.board.length; i++){
			let piece = this.board[i];
			if(piece && lostSoldiers.indexOf(piece) !== -1){
				this.board[i] = null;
				spaces.push(indexToNotation(i));
			}
		}

		this.turn = swapTeam(this.turn);
		this.turnActions = 0;
		this.board.forEach(function(piece){
			if(piece){
				piece.resetActions();
			}
		});

		console.log('reset.');

		return spaces;
	}

	isActionsLeft(){
		console.log(this.turnActions + ' out of ' + MAX_ACTIONS_ALLOWED);

		if(this.turnActions >= MAX_ACTIONS_ALLOWED){
			return false;
		}

		return true;
	}

	conductBattles(){
		let lostSoldiers = [];
		for(let i=0; i<this.board.length; i++){
			let piece = this.board[i];
			let tile = this.terraState[i];

			if(piece){		// if there is a piece
				let victim = piece;

				let surroundingTiles = getTilesInCircleFrom(indexToNotation(i), 1);
				let archerTiles = getTilesInCircleFrom(indexToNotation(i), 2);

				let defense = this.calculatePower(surroundingTiles, victim.color);
				if(tile === 'h')
					defense++;
				if(victim.type === 's' || victim.type ==='k')
					defense++;

				let attack = this.calculatePower(surroundingTiles, swapTeam(victim.color));
				attack += this.calculateArcherPower(archerTiles, swapTeam(victim.color));

				if(attack > defense){
					lostSoldiers.push(victim);
				}
			}
		}

		return lostSoldiers;
	}

	calculatePower(adjacentTiles, color){
		let power = 0;
		let me = this;

		adjacentTiles.forEach(function(adjacent){
			let piece = me.board[SQUARES[adjacent]];
			let tile = me.terraState[SQUARES[adjacent]];

			if(piece &&
			    piece.color === color &&
			   (piece.type === 's' || piece.type === 'k')
			  ){
				power++;

				if(tile === 'h')		// if neighbor is on a hill give more defense
					power++;
			}


		});

		return power;
	}

	calculateArcherPower(archerTiles, color){
		let power = 0;
		let me = this;

		archerTiles.forEach(function(archerTile){
			let piece = me.board[SQUARES[archerTile]];
			let tile = me.terraState[SQUARES[archerTile]];

			if(piece &&
			   piece.color === color &&
			   piece.type === 'a'){
				power++;

				if(tile === 'h')
					power++;
			}
		});

		return power;
	}
}

function swapTeam(team){
	return team === TEAM_A ? TEAM_B : TEAM_A;
}

function is_digit(c) {
	return '0123456789'.indexOf(c) !== -1;
}

/*************************
	PATHFINDING
*************************/
function calculateMoveableSquares(square,board,terraState,pathsFound,stepsTaken, MAX_STEPS, trackingSquares, callback){

  let start = square;	// a3
  let boardIndex = SQUARES[start];

  if(haveVisitedTile(start, stepsTaken, pathsFound))
  	return false;

  let localPathsFound = pathsFound.slice(); // copy of array
  localPathsFound.push(start);

  if(stepsTaken > MAX_STEPS)
  	return false;

  if(trackingSquares.indexOf(start) === -1){
  	trackingSquares.push(start);
  }

  let northWest = boardIndex + 10 - 1;
  let north = boardIndex + 10;
  let northEast = boardIndex + 10 + 1;
  let east = boardIndex + 1;
  let southEast = boardIndex - 10 + 1;
  let south = boardIndex - 10;
  let southWest = boardIndex - 10 - 1;
  let west = boardIndex - 1;

  function isNorthValid(){
  	if(north < 100)
  		return true;

  	return false;
  }

  function isEastValid(){
  	let furthestWestSpace = 0;

  	for(let r = 0; r < 10; r++){

  		if(east > furthestWestSpace && east < (furthestWestSpace + 10)){
			return true;
		}

  		furthestWestSpace += 10;
  	}

  	return false;
  }

  function isWestValid(){
	let furthestEastSpace = 9;

  	for(let r = 0; r < 10; r++){

  		if(west < furthestEastSpace && west > (furthestEastSpace - 10)){
			return true;
		}

  		furthestEastSpace += 10;
  	}

  	return false;
  }

  function isSouthValid(){
  	if(south > -1)
  		return true;

  	return false;
  }

  if(isNorthValid())
 	callback(board, terraState, north, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// NORTH

  if(isNorthValid() && isEastValid())
  	callback(board, terraState, northEast, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// NORTH EAST

  if(isEastValid())
  	callback(board, terraState, east, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// EAST

  if(isSouthValid() && isEastValid())
  	callback(board, terraState, southEast, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// SOUTH EAST

  if(isSouthValid())
  	callback(board, terraState, south, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// SOUTH

  if(isSouthValid() && isWestValid())
  	callback(board, terraState, southWest, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// SOUTH WEST

  if(isWestValid())
  	callback(board, terraState, west, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// WEST

  if(isNorthValid() && isWestValid())
  	callback(board, terraState, northWest, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares);	// NORTH WEST

  return trackingSquares;
}

function goDirection(board, terraState, dest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares){
  stepsTaken++;

  if(dest > -1 && dest < 100){
	  if(!board[dest] ||
	     board[dest].piece === null){

	  	if(!terraState[dest] || terraState[dest] !== 'w'){
	  		let square = indexToNotation(dest, board);
	  		calculateMoveableSquares(square,board,terraState, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares, goDirection);
	  	}

	  }else{
	  	return false;
	  }
  }
}

function haveVisitedTile(square, stepsTaken, pathsFound){
  let sqnum = square.substr(1,square.length);

  let id = sqnum+1 * 10; // should be unique id

  for(let i=0; i<stepsTaken; i++){
  	if(pathsFound[i] == id)
    	 return true;
  }

  return false;
}

function indexToNotation(index){

	for(let square in SQUARES){
		if(SQUARES[square] === index)
			return square;
	}

	console.log('could not find ' + index);
}

function squareToBoardIndex(file, rank){	// file=x, rank=y	a = file, 8 = rank
	let fileChar;

	for( let prop1 in FILES){

		if(FILES[prop1].indexOf(file) !== -1){
			fileChar = prop1;
			break;
		}
	}

	for( let prop in RANKS){
		if(RANKS[prop].indexOf(file) !== -1){
			rank = prop;
			break;
		}
	}

	if(!fileChar){
		console.log('issure with');
		console.log('file', fileChar);
		console.log('rank', rank);
	}

	return (fileChar + rank);
}

function findRangeTraveled(from, to, board, terraState){
	let rangeOne = calculateMoveableSquares(from, board, terraState, [], 0, 1, [], goDirection);
	if(rangeOne.indexOf(to) !== -1)
		return 1;

	let rangeTwo = calculateMoveableSquares(from, board, terraState, [], 0, 2, [], goDirection);
	if(rangeTwo.indexOf(to) !== -1)
		return 2;

	return 3;
}

function getAdjacentTiles(board, terraState, dest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares){
  stepsTaken++;

  if(dest > -1 && dest < 100){
	  if(board[dest] &&
	     board[dest].piece !== null){

  		let square = indexToNotation(dest, board);
  		calculateMoveableSquares(square,board,terraState, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares, getAdjacentTiles);

	  }else{
	  	return false;
	  }
  }
}

function getSquareFromIndex(index){
  for(var prop in SQUARES){
  	if(SQUARES[prop] == index)
    	return prop;
  }
}

function getRank(index){
	var sq = getSquareFromIndex(index);
  if(sq){
  	var rank = parseInt(sq.substr(1,sq.length)); // a8 would yield rank=8
    return rank;
  }
}

function getFile(index){
  var sq = getSquareFromIndex(index);
  if(sq){
    var file = sq.charAt(0);
    return file;
  }
}

function getTilesInCircleFrom(square, distance){
  let files = {
	'a': 0,
	  'b': 1,
	  'c': 2,
	  'd': 3,
	  'e': 4,
	  'f': 5,
	  'g': 6,
	  'h': 7,
	  'i': 8,
	  'j': 9
	}

  var startIndex = SQUARES[square];

  var startRank = getRank(startIndex);
  var startFile = getFile(startIndex);

  var tiles = [];

  var north = startIndex + (distance * 10);
  var south = startIndex - (distance * 10);
  var east = startIndex + distance;
  var west = startIndex - distance;

  var desiredNorthRank = getRank(north); // a8 would yield 8
  var desiredSouthRank = getRank(south);
  var desiredEastFile = getFile(east);  // a8 would yield 'a'
  var desiredWestFile = getFile(west);

  var ctr=1;

  if(desiredNorthRank){
    // go right from north
    while(ctr <= distance){
      var ne = north + ctr;

      if(ne < 100 && getRank(ne) === desiredNorthRank){
        if(tiles.indexOf(ne) === -1)
          tiles.push(ne);
      }

      ctr++;
    }

    // go left from north
    ctr = 0;
    while(ctr <= distance){
      var nw = north - ctr;

      if(nw > -1 && getRank(nw) === desiredNorthRank){
        if(tiles.indexOf(nw) === -1)
          tiles.push(nw);
      }

      ctr++;
    }
  }

  if(desiredSouthRank){
    // go right from south
    ctr = 0;
    while(ctr <= distance){
      var se = south + ctr;

      if(se < 100 && getRank(se) === desiredSouthRank){
        if(tiles.indexOf(se) === -1)
          tiles.push(se);
      }

      ctr++;
    }

    // go left from south
    ctr = 0;
    while(ctr <= distance){
      var sw = south - ctr;

      if(sw > -1 && getRank(sw) === desiredSouthRank){
        if(tiles.indexOf(sw) === -1)
          tiles.push(sw);
      }

      ctr++;
    }
  }

  if(desiredEastFile && files[desiredEastFile] === (files[startFile] + distance)){
    // go up from east
    ctr = 0;
    while(ctr <= distance * 10){
      var en = east + ctr;

      if(en < 100 && getFile(en) === desiredEastFile){
        if(tiles.indexOf(en) === -1)
          tiles.push(en);
      }

      ctr+=10;
    }

    // go down from east
    ctr = 0;
    while(ctr <= distance * 10){
      var es = east - ctr;

      if(es < 100 && getFile(es) === desiredEastFile){
        if(tiles.indexOf(es) === -1)
          tiles.push(es);
      }

      ctr+=10;
    }
  }

  if(desiredWestFile && files[desiredWestFile] === (files[startFile] - distance)){
    // go up from east
    ctr = 0;
    while(ctr <= distance * 10){
      var wn = west + ctr;

      if(wn < 100 && getFile(wn) === desiredWestFile){
        if(tiles.indexOf(wn) === -1)
          tiles.push(wn);
      }

      ctr+=10;
    }

    // go down from east
    ctr = 0;
    while(ctr <= distance * 10){
      var ws = west - ctr;

      if(ws < 100 && getFile(ws) === desiredWestFile){
        if(tiles.indexOf(ws) === -1)
          tiles.push(ws);
      }

      ctr+=10;
    }
  }

  var desiredTiles = [];

  for(var i=0; i<tiles.length; i++){
  	desiredTiles.push(getSquareFromIndex(tiles[i]));
  }

  return desiredTiles.sort();
}


export default { TileMages };