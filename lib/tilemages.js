const TEAM_A = 'r';
const TEAM_B = 'w';

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

/*const SQUARES = {
a10:     0, b10:    1, c10:    2, d10:   3, e10:  4, f10:  5, g10:   6,  h10:   7,     i10: 8,  j10: 9,
  a9:   10,   b9:  11,   c9:   12, d9:  13, e9:  14, f9:  15, g9:  16,     h9:  17,    i9: 18,    j9: 19,
  a8:   20,   b8:   21,  c8:   22, d8:  23, e8:  24, f8:  25, g8:   26,    h8:   27,   i8: 28,  j8: 29,
  a7:   30,   b7:   31,  c7:  32, d7:  33, e7:   34, f7:  35, g7:  36,      h7:  37,	i7: 38,  j7: 39,
  a6:   40,   b6:   41,   c6:  42, d6:  43, e6:  44, f6:  45, g6:  46,     h6:  47,	i6: 48,  j6: 49,
  a5:   50,   b5:   51,   c5:  52, d5:  53, e5:  54, f5:  55, g5:  56,     h5:  57,	i5: 58,  j5: 59,
  a4:   60,   b4:   61,   c4:  62, d4:  63, e4:  64, f4:  65, g4:  66,     h4:  67,	i4: 68,  j4: 69,
  a3:   70,   b3:   71,   c3:  72, d3:  73, e3:  74, f3:  75, g3:  76,     h3:  77,	i3: 78,  j3: 79,
  a2:   80,   b2:   81,   c2:  82, d2:  83, e2:  84, f2:  85, g2:  86,     h2:  87,	i2: 88,  j2: 89,
  a1:   90,   b1:   91, c1:    92, d1:  93, e1:  94, f1:  95, g1:  96,     h1:  97,	i1: 98,  j1: 99,
};*/

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

const DEFAULT_POSITION = 'skmassamks/10/10/10/10/10/10/10/10/SKMASSAMKS';
const DEFAULT_TERRA_STATE = '10/10/10/3w6/10/5h4/10/10/10/10';

class TileMages {

	constructor(fen){
		this.board = new Array(100);
		this.terraState = new Array(100);

		this.squares = SQUARES;
		this.turn = TEAM_A;

		if (typeof fen === 'undefined') {
			this.load(DEFAULT_POSITION);
		}else if(fen === 'start') {
			this.load(DEFAULT_POSITION);
		}else {
			this.load(fen);
		}

		this.loadTerraState(DEFAULT_TERRA_STATE);
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
				let color = (piece <= 'a') ? TEAM_B : TEAM_A;

				let p = {
					color: color,
					type: piece.toLowerCase(),
					maxMovement: piece.toLowerCase() === 'k' ? 3 : 2
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

		//updateSetup()
	}

	generateFen(){
		let fen = '';
		let empty = 0;

		for(let i = 0; i < this.board.length; i++){
			if(!this.board[i]){
				empty++;
			}else{
				if(empty > 0){
					fen += empty;
				}

				let color = this.board[i].color;
				let piece = this.board[i].type;

				fen += color === TEAM_A ? piece.toUpperCase() : piece;
				empty = 0;
			}

			if(i > 0 && (i+1) % 10 === 0 && i+1<SQUARES.j1){
				if(empty > 0)
					fen += empty;


				fen += '/';

				empty = 0;
			}
		}

		return fen;
	}

	move(move){
		let piece = this.board[SQUARES[move.from]];

		let validMoves = calculateMoveableSquares(move.from, this.board,this.terraState,[],0,piece.maxMovement,[]);
		if(validMoves.indexOf(move.to) !== -1){
			this.board[ SQUARES[move.to]] = this.board[SQUARES[move.from]];
			this.board[SQUARES[move.from]]= null;

			this.turn = swapTeam(this.turn);
		}else{
			console.log('none valid');
			console.log(move.from);
			console.log(move.to);
		}

		console.log(this.board);
	}

	generateMoveOptions(from){
		console.log(this.board[SQUARES[from]]);
		let piece = this.board[SQUARES[from]];

		return calculateMoveableSquares(from, this.board,this.terraState,[],0,piece.maxMovement,[]);
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
function calculateMoveableSquares(square,board,terraState,pathsFound,stepsTaken, MAX_STEPS, moveableSquares){

  let start = square;	// a3
  let boardIndex = SQUARES[start];

  if(haveVisitedTile(start, stepsTaken, pathsFound))
  	return false;

  let localPathsFound = pathsFound.slice(); // copy of array
  localPathsFound.push(start);

  if(stepsTaken > MAX_STEPS)
  	return false;

  if(moveableSquares.indexOf(start) === -1){
  	moveableSquares.push(start);
  }

  let northWest = boardIndex + 10 - 1;
  let north = boardIndex + 10;
  let northEast = boardIndex + 10 + 1;
  let east = boardIndex + 1;
  let southEast = boardIndex - 10 + 1;
  let south = boardIndex - 10;
  let southWest = boardIndex - 10 - 1;
  let west = boardIndex - 1;

/*  console.log('north', north);
  console.log('east', east);
  console.log('south', south);
  console.log('west', west);*/

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

//  console.log('checking north');
  if(isNorthValid())
 	goDirection(board, terraState, north, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// NORTH

//  console.log('checking northeast');
  if(isNorthValid() && isEastValid())
  	goDirection(board, terraState, northEast, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// NORTH EAST

//  console.log('checking east');
  if(isEastValid())
  	goDirection(board, terraState, east, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// EAST

//  console.log('checking southeast');
  if(isSouthValid() && isEastValid())
  	goDirection(board, terraState, southEast, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// SOUTH EAST

//  console.log('checking south');
  if(isSouthValid())
  	goDirection(board, terraState, south, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// SOUTH

//  console.log('checking southwest');
  if(isSouthValid() && isWestValid())
  	goDirection(board, terraState, southWest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// SOUTH WEST

//  console.log('cehcking west');
  if(isWestValid())
  	goDirection(board, terraState, west, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// WEST

//  console.log('checking northwest');
  if(isNorthValid() && isWestValid())
  	goDirection(board, terraState, northWest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);	// NORTH WEST

  return moveableSquares;
}

function goDirection(board, terraState, dest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares){
  stepsTaken++;

  if(dest > -1 && dest < 100){
	  if(!board[dest] ||
	     board[dest].piece === null){

	  	if(!terraState[dest] || terraState[dest] !== 'w'){
	  		let square = indexToNotation(dest, board);
	  		calculateMoveableSquares(square,board,terraState, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares);
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

	console.log('file', file);
	console.log('rank', rank);
	console.log('------');

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
	console.log('eh?');

	console.log(fileChar, rank);

	if(!fileChar){
		console.log('issure with');
		console.log('file', fileChar);
		console.log('rank', rank);
	}

	console.log('found ' + (fileChar + rank));
	return (fileChar + rank);
}

export { TileMages };