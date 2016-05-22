(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("boardgame", [], factory);
	else if(typeof exports === 'object')
		exports["boardgame"] = factory();
	else
		root["boardgame"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _tilemages = __webpack_require__(1);

	var _tilemages2 = _interopRequireDefault(_tilemages);

	var _board = __webpack_require__(2);

	var _board2 = _interopRequireDefault(_board);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);

	exports.default = {
		TileMages: _tilemages2.default,
		load: _board2.default
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TEAM_A = 'r';
	var TEAM_B = 'w';

	var MAX_ACTIONS_ALLOWED = 2;

	var SOLDIER = 's';
	var KNIGHT = 'k';
	var MAGE = 'm';
	var ARCHER = 'a';

	var DIMENSIONS = 10;

	var FILE_TO_NUM = {
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
	};

	var RANKS = {
		'1': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		'2': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
		'3': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
		'4': [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
		'5': [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		'6': [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
		'7': [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
		'8': [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
		'9': [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
		'10:': [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
	};

	var FILES = {
		'a': [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
		'b': [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
		'c': [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
		'd': [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
		'e': [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
		'f': [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
		'g': [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
		'h': [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
		'i': [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
		'j': [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
	};

	var RANK_1 = 9;
	var RANK_2 = 8;
	var RANK_3 = 7;
	var RANK_4 = 6;
	var RANK_5 = 5;
	var RANK_6 = 4;
	var RANK_7 = 3;
	var RANK_8 = 2;
	var RANK_9 = 1;
	var RANK_10 = 0;

	var SQUARES = {
		a10: 90, b10: 91, c10: 92, d10: 93, e10: 94, f10: 95, g10: 96, h10: 97, i10: 98, j10: 99,
		a9: 80, b9: 81, c9: 82, d9: 83, e9: 84, f9: 85, g9: 86, h9: 87, i9: 88, j9: 89,
		a8: 70, b8: 71, c8: 72, d8: 73, e8: 74, f8: 75, g8: 76, h8: 77, i8: 78, j8: 79,
		a7: 60, b7: 61, c7: 62, d7: 63, e7: 64, f7: 65, g7: 66, h7: 67, i7: 68, j7: 69,
		a6: 50, b6: 51, c6: 52, d6: 53, e6: 54, f6: 55, g6: 56, h6: 57, i6: 58, j6: 59,
		a5: 40, b5: 41, c5: 42, d5: 43, e5: 44, f5: 45, g5: 46, h5: 47, i5: 48, j5: 49,
		a4: 30, b4: 31, c4: 32, d4: 33, e4: 34, f4: 35, g4: 36, h4: 37, i4: 38, j4: 39,
		a3: 20, b3: 21, c3: 22, d3: 23, e3: 24, f3: 25, g3: 26, h3: 27, i3: 28, j3: 29,
		a2: 10, b2: 11, c2: 12, d2: 13, e2: 14, f2: 15, g2: 16, h2: 17, i2: 18, j2: 19,
		a1: 0, b1: 1, c1: 2, d1: 3, e1: 4, f1: 5, g1: 6, h1: 7, i1: 8, j1: 9
	};

	var DEFAULT_POSITION = 'SKMASSAMKS/10/10/10/10/10/10/10/10/skmassamks r 0';
	var DEFAULT_TERRA_STATE = '10/10/10/10/10/10/10/10/10/10';

	var TileMages = function () {
		function TileMages(fen, boardFen) {
			_classCallCheck(this, TileMages);

			// game objects
			this.board = new Array(100);
			this.terraState = new Array(100);

			// init values
			this.squares = SQUARES;

			// load pieces
			if (typeof fen === 'undefined') {
				this.turn = TEAM_A;
				this.load(DEFAULT_POSITION);
			} else if (fen === 'start') {
				this.turn = TEAM_A;
				this.load(DEFAULT_POSITION);
			} else {
				this.turn = fen.split(' ')[1];
				console.log('turn is! ' + this.turn);
				this.load(fen);
			}

			// load board
			if (typeof boardFen === 'undefined') {
				this.loadTerraState(DEFAULT_TERRA_STATE);
			} else if (fen === 'start') {
				this.loadTerraState(DEFAULT_TERRA_STATE);
			} else {
				this.loadTerraState(boardFen);
			}

			this.turnActions = parseInt(fen.split(' ')[2]);
		}

		_createClass(TileMages, [{
			key: 'load',
			value: function load(fen) {
				var tokens = fen.split(/\s+/); // make an array
				var position = tokens[0];
				var square = 0;

				for (var i = 0; i < this.board.length; i++) {
					var piece = position.charAt(i);

					if (piece === '/') {} else if (is_digit(piece)) {
						var num = parseInt(piece, 10);

						if (num === 1) {
							if (is_digit(fen.charAt(i + 1))) {
								num = parseInt(fen.substr(i, i + 2), 10);
							}
						}

						square += num;
					} else {
						var color = piece < 'a' ? TEAM_A : TEAM_B;

						var p = {
							color: color,
							type: piece.toLowerCase(),
							maxMovement: piece.toLowerCase() === 'k' ? 3 : 2,
							maxActions: 2,
							performedActions: 0,
							resetActions: function resetActions() {
								this.performedActions = 0;
							},
							getMaxAllowedMovement: function getMaxAllowedMovement() {
								if (this.performedActions === 0) {
									return this.maxMovement;
								} else if (this.performedActions === 1) {
									return 1;
								} else {
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
		}, {
			key: 'loadTerraState',
			value: function loadTerraState(fen) {
				var square = 0;

				for (var i = 0; i < this.terraState.length; i++) {
					var landscape = fen.charAt(i);

					if (landscape === '/') {} else if (is_digit(landscape)) {
						var num = parseInt(landscape, 10);

						if (num === 1) {
							if (is_digit(fen.charAt(i + 1))) {
								num = parseInt(fen.substr(i, i + 2), 10);
							}
						}

						square += num;
					} else {

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
		}, {
			key: 'put',
			value: function put(piece, square) {
				this.board[square] = { type: piece.type, color: piece.color };
			}
		}, {
			key: 'generateFen',
			value: function generateFen() {
				var fen = '';

				for (var i = 0; i < this.board.length; i++) {
					if (!this.board[i]) {
						fen += 1;
					} else {
						var color = this.board[i].color;
						var piece = this.board[i].type;

						fen += color === TEAM_A ? piece.toUpperCase() : piece;
					}

					if (i > 0 && (i + 1) % 10 === 0 && i + 1 < SQUARES.j10) {
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

				var gameStatus = this.gameOver();
				if (gameStatus) {
					fen += ' ' + gameStatus;
				}

				return fen;
			}
		}, {
			key: 'generateBoardFen',
			value: function generateBoardFen() {
				var fen = '';

				for (var i = 0; i < this.terraState.length; i++) {
					if (!this.terraState[i]) {
						fen += 1;
					} else {

						fen += this.terraState[i];
					}

					if (i > 0 && (i + 1) % 10 === 0 && i + 1 < SQUARES.j10) {
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
		}, {
			key: 'move',
			value: function move(_move) {
				var piece = this.board[SQUARES[_move.from]];
				var pieceMaxMoves = piece.getMaxAllowedMovement();
				if (piece.performedActions === 0) pieceMaxMoves -= this.turnActions;

				// get ring distance
				var distanceTraveled = findRangeTraveled(_move.from, _move.to, this.board, this.terraState);
				var actionsTaken = 0;

				if (distanceTraveled === 1) {
					piece.performedActions++;
					actionsTaken++;
				} else if (distanceTraveled === 2) {
					if (piece.type === 'k') {
						piece.performedActions++;
						actionsTaken++;
					} else {
						piece.performedActions += 2;
						actionsTaken += 2;
					}
				} else {
					piece.performedActions += 3; // should only get here with the knight moving 3
					actionsTaken += 3;
				}

				var validMoves = calculateMoveableSquares(_move.from, this.board, this.terraState, [], 0, pieceMaxMoves, [], goDirection);
				if (validMoves.indexOf(_move.to) !== -1) {
					this.board[SQUARES[_move.to]] = this.board[SQUARES[_move.from]];
					this.board[SQUARES[_move.from]] = null;
				} else {
					console.log(_move.from, _move.to, ' MOVED INVALIDLY!');
					console.log('GAME WILL NOT BE UPDATED PROPERLY');
				}

				// track num of moves made this turn
				this.turnActions += actionsTaken;

				if (this.turnActions >= MAX_ACTIONS_ALLOWED) {
					return this.resetTurn();
				}

				//console.log(this.board);
			}
		}, {
			key: 'generateMoveOptions',
			value: function generateMoveOptions(from) {
				var piece = this.board[SQUARES[from]];
				var pieceMaxMoves = piece.getMaxAllowedMovement();
				if (piece.performedActions === 0) pieceMaxMoves -= this.turnActions;

				if (piece) return calculateMoveableSquares(from, this.board, this.terraState, [], 0, pieceMaxMoves, [], goDirection);
			}
		}, {
			key: 'generateMoves',
			value: function generateMoves(options) {

				function add_move(board, moves, from, to, flags) {
					moves.push(build_move(board, from, to, flags));
				}

				var moves = [];
				var us = turn;
				var them = swapTeam(us);

				var firstSq = SQUARES.a1;
				var lastSq = SQUARES.j10;

				for (var i = firstSq; i <= lastSq; i++) {
					var piece = this.board[i]; // piece object
					var square = this.SQUARES[i]; // square value - ex. a8

					if (piece === null || piece.color !== us) {
						continue;
					}
				}
			}
		}, {
			key: 'generateTerraformOptions',
			value: function generateTerraformOptions() {
				var _this = this;

				var options = [];
				var me = this;

				var _loop = function _loop(i) {
					var board = _this.board;
					var piece = board[i];

					if (piece && piece.type === 'm' && piece.color === me.turn && piece.performedActions === 0 && me.turnActions === 0) {
						(function () {
							var space = indexToNotation(i);

							var oneAway = getTilesInCircleFrom(indexToNotation(i), 1);
							var twoAway = getTilesInCircleFrom(indexToNotation(i), 2);

							var allAround = oneAway.concat(twoAway);
							var available = [];

							allAround.forEach(function (space) {

								var potPiece = board[SQUARES[space]];

								// if there is no piece in the space, add it
								if (!potPiece) available.push(space);
							});

							options = options.concat(available);
						})();
					}
				};

				for (var i = 0; i < this.board.length; i++) {
					_loop(i);
				}

				return options;
			}
		}, {
			key: 'terraform',
			value: function terraform(type, square) {
				// do nothing if they try to terraform a square as
				// the type it already has
				if (type === this.terraState[SQUARES[square]]) return;

				this.terraState[SQUARES[square]] = type;

				return this.resetTurn();
			}
		}, {
			key: 'resetTurn',
			value: function resetTurn() {
				var lostSoldiers = this.conductBattles();
				var spaces = [];

				// remove lost soldiers
				for (var i = 0; i < this.board.length; i++) {
					var piece = this.board[i];
					if (piece && lostSoldiers.indexOf(piece) !== -1) {
						this.board[i] = null;
						spaces.push(indexToNotation(i));
					}
				}

				this.turn = swapTeam(this.turn);
				this.turnActions = 0;
				this.board.forEach(function (piece) {
					if (piece) {
						piece.resetActions();
					}
				});

				return spaces;
			}
		}, {
			key: 'isActionsLeft',
			value: function isActionsLeft() {
				if (this.turnActions >= MAX_ACTIONS_ALLOWED) {
					return false;
				}

				return true;
			}
		}, {
			key: 'conductBattles',
			value: function conductBattles() {
				var lostSoldiers = [];
				for (var i = 0; i < this.board.length; i++) {
					var piece = this.board[i];
					var tile = this.terraState[i];

					if (piece) {
						// if there is a piece
						var victim = piece;

						var surroundingTiles = getTilesInCircleFrom(indexToNotation(i), 1);
						var archerTiles = getTilesInCircleFrom(indexToNotation(i), 2);

						var defense = this.calculatePower(surroundingTiles, victim.color);
						if (tile === 'h') defense++;
						if (victim.type === 's' || victim.type === 'k') defense++;

						var attack = this.calculatePower(surroundingTiles, swapTeam(victim.color));
						attack += this.calculateArcherPower(archerTiles, swapTeam(victim.color));

						if (attack > defense) {
							lostSoldiers.push(victim);
						}
					}
				}

				return lostSoldiers;
			}
		}, {
			key: 'calculatePower',
			value: function calculatePower(adjacentTiles, color) {
				var power = 0;
				var me = this;

				adjacentTiles.forEach(function (adjacent) {
					var piece = me.board[SQUARES[adjacent]];
					var tile = me.terraState[SQUARES[adjacent]];

					if (piece && piece.color === color && (piece.type === 's' || piece.type === 'k')) {
						power++;

						if (tile === 'h') // if neighbor is on a hill give more defense
							power++;
					}
				});

				return power;
			}
		}, {
			key: 'calculateArcherPower',
			value: function calculateArcherPower(archerTiles, color) {
				var power = 0;
				var me = this;

				archerTiles.forEach(function (archerTile) {
					var piece = me.board[SQUARES[archerTile]];
					var tile = me.terraState[SQUARES[archerTile]];

					if (piece && piece.color === color && piece.type === 'a') {
						power++;

						if (tile === 'h') power++;
					}
				});

				return power;
			}
		}, {
			key: 'gameOver',
			value: function gameOver() {
				// conditions for ending the game
				var isMages = this.noMages();

				if (!isMages) {
					return undefined;
				} else {
					return isMages;
				}
			}
		}, {
			key: 'noMages',
			value: function noMages() {
				var count = {};
				count[TEAM_A] = 0;
				count[TEAM_B] = 0;

				var board = this.board;

				for (var i = 0; i < this.board.length; i++) {
					var piece = board[i];

					if (piece && piece.type === 'm') {
						var color = piece.color;
						count[color] = count[color] + 1;
					}
				}

				if (count[TEAM_A] === 0 && count[TEAM_B] === 0) {
					// draw
					return 'draw';
				} else if (count[TEAM_A] === 0 && count[TEAM_B] > 0) {
					// TEAM_B win
					return TEAM_B;
				} else if (count[TEAM_A] > 0 && count[TEAM_B] === 0) {
					// TEAM_A win
					return TEAM_A;
				} else {
					// ongoing
					return;
				}
			}
		}]);

		return TileMages;
	}();

	function swapTeam(team) {
		return team === TEAM_A ? TEAM_B : TEAM_A;
	}

	function is_digit(c) {
		return '0123456789'.indexOf(c) !== -1;
	}

	/*************************
		PATHFINDING
	*************************/
	function calculateMoveableSquares(square, board, terraState, pathsFound, stepsTaken, MAX_STEPS, trackingSquares, callback) {

		var start = square; // a3
		var boardIndex = SQUARES[start];

		if (haveVisitedTile(start, stepsTaken, pathsFound)) return false;

		var localPathsFound = pathsFound.slice(); // copy of array
		localPathsFound.push(start);

		if (stepsTaken > MAX_STEPS) return false;

		if (trackingSquares.indexOf(start) === -1) {
			trackingSquares.push(start);
		}

		var northWest = boardIndex + 10 - 1;
		var north = boardIndex + 10;
		var northEast = boardIndex + 10 + 1;
		var east = boardIndex + 1;
		var southEast = boardIndex - 10 + 1;
		var south = boardIndex - 10;
		var southWest = boardIndex - 10 - 1;
		var west = boardIndex - 1;

		function isNorthValid() {
			if (north < 100) return true;

			return false;
		}

		function isEastValid() {
			var furthestWestSpace = 0;

			for (var r = 0; r < 10; r++) {

				if (east > furthestWestSpace && east < furthestWestSpace + 10) {
					return true;
				}

				furthestWestSpace += 10;
			}

			return false;
		}

		function isWestValid() {
			var furthestEastSpace = 9;

			for (var r = 0; r < 10; r++) {

				if (west < furthestEastSpace && west > furthestEastSpace - 10) {
					return true;
				}

				furthestEastSpace += 10;
			}

			return false;
		}

		function isSouthValid() {
			if (south > -1) return true;

			return false;
		}

		if (isNorthValid()) callback(board, terraState, north, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // NORTH

		if (isNorthValid() && isEastValid()) callback(board, terraState, northEast, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // NORTH EAST

		if (isEastValid()) callback(board, terraState, east, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // EAST

		if (isSouthValid() && isEastValid()) callback(board, terraState, southEast, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // SOUTH EAST

		if (isSouthValid()) callback(board, terraState, south, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // SOUTH

		if (isSouthValid() && isWestValid()) callback(board, terraState, southWest, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // SOUTH WEST

		if (isWestValid()) callback(board, terraState, west, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // WEST

		if (isNorthValid() && isWestValid()) callback(board, terraState, northWest, localPathsFound, stepsTaken, MAX_STEPS, trackingSquares); // NORTH WEST

		return trackingSquares;
	}

	function goDirection(board, terraState, dest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares) {
		stepsTaken++;

		if (dest > -1 && dest < 100) {
			if (!board[dest] || board[dest].piece === null) {

				if (!terraState[dest] || terraState[dest] !== 'w') {
					var square = indexToNotation(dest, board);
					calculateMoveableSquares(square, board, terraState, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares, goDirection);
				}
			} else {
				return false;
			}
		}
	}

	function haveVisitedTile(square, stepsTaken, pathsFound) {
		var sqnum = square.substr(1, square.length);

		var id = sqnum + 1 * 10; // should be unique id

		for (var i = 0; i < stepsTaken; i++) {
			if (pathsFound[i] == id) return true;
		}

		return false;
	}

	function indexToNotation(index) {

		for (var square in SQUARES) {
			if (SQUARES[square] === index) return square;
		}

		console.log('could not find ' + index);
	}

	function squareToBoardIndex(file, rank) {
		// file=x, rank=y	a = file, 8 = rank
		var fileChar = void 0;

		for (var prop1 in FILES) {

			if (FILES[prop1].indexOf(file) !== -1) {
				fileChar = prop1;
				break;
			}
		}

		for (var prop in RANKS) {
			if (RANKS[prop].indexOf(file) !== -1) {
				rank = prop;
				break;
			}
		}

		if (!fileChar) {
			console.log('issure with');
			console.log('file', fileChar);
			console.log('rank', rank);
		}

		return fileChar + rank;
	}

	function findRangeTraveled(from, to, board, terraState) {
		var rangeOne = calculateMoveableSquares(from, board, terraState, [], 0, 1, [], goDirection);
		if (rangeOne.indexOf(to) !== -1) return 1;

		var rangeTwo = calculateMoveableSquares(from, board, terraState, [], 0, 2, [], goDirection);
		if (rangeTwo.indexOf(to) !== -1) return 2;

		return 3;
	}

	function getAdjacentTiles(board, terraState, dest, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares) {
		stepsTaken++;

		if (dest > -1 && dest < 100) {
			if (board[dest] && board[dest].piece !== null) {

				var square = indexToNotation(dest, board);
				calculateMoveableSquares(square, board, terraState, localPathsFound, stepsTaken, MAX_STEPS, moveableSquares, getAdjacentTiles);
			} else {
				return false;
			}
		}
	}

	function getSquareFromIndex(index) {
		for (var prop in SQUARES) {
			if (SQUARES[prop] == index) return prop;
		}
	}

	function getRank(index) {
		var sq = getSquareFromIndex(index);
		if (sq) {
			var rank = parseInt(sq.substr(1, sq.length)); // a8 would yield rank=8
			return rank;
		}
	}

	function getFile(index) {
		var sq = getSquareFromIndex(index);
		if (sq) {
			var file = sq.charAt(0);
			return file;
		}
	}

	function getTilesInCircleFrom(square, distance) {
		var files = {
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
		};

		var startIndex = SQUARES[square];

		var startRank = getRank(startIndex);
		var startFile = getFile(startIndex);

		var tiles = [];

		var north = startIndex + distance * 10;
		var south = startIndex - distance * 10;
		var east = startIndex + distance;
		var west = startIndex - distance;

		var desiredNorthRank = getRank(north); // a8 would yield 8
		var desiredSouthRank = getRank(south);
		var desiredEastFile = getFile(east); // a8 would yield 'a'
		var desiredWestFile = getFile(west);

		var ctr = 1;

		if (desiredNorthRank) {
			// go right from north
			while (ctr <= distance) {
				var ne = north + ctr;

				if (ne < 100 && getRank(ne) === desiredNorthRank) {
					if (tiles.indexOf(ne) === -1) tiles.push(ne);
				}

				ctr++;
			}

			// go left from north
			ctr = 0;
			while (ctr <= distance) {
				var nw = north - ctr;

				if (nw > -1 && getRank(nw) === desiredNorthRank) {
					if (tiles.indexOf(nw) === -1) tiles.push(nw);
				}

				ctr++;
			}
		}

		if (desiredSouthRank) {
			// go right from south
			ctr = 0;
			while (ctr <= distance) {
				var se = south + ctr;

				if (se < 100 && getRank(se) === desiredSouthRank) {
					if (tiles.indexOf(se) === -1) tiles.push(se);
				}

				ctr++;
			}

			// go left from south
			ctr = 0;
			while (ctr <= distance) {
				var sw = south - ctr;

				if (sw > -1 && getRank(sw) === desiredSouthRank) {
					if (tiles.indexOf(sw) === -1) tiles.push(sw);
				}

				ctr++;
			}
		}

		if (desiredEastFile && files[desiredEastFile] === files[startFile] + distance) {
			// go up from east
			ctr = 0;
			while (ctr <= distance * 10) {
				var en = east + ctr;

				if (en < 100 && getFile(en) === desiredEastFile) {
					if (tiles.indexOf(en) === -1) tiles.push(en);
				}

				ctr += 10;
			}

			// go down from east
			ctr = 0;
			while (ctr <= distance * 10) {
				var es = east - ctr;

				if (es < 100 && getFile(es) === desiredEastFile) {
					if (tiles.indexOf(es) === -1) tiles.push(es);
				}

				ctr += 10;
			}
		}

		if (desiredWestFile && files[desiredWestFile] === files[startFile] - distance) {
			// go up from east
			ctr = 0;
			while (ctr <= distance * 10) {
				var wn = west + ctr;

				if (wn < 100 && getFile(wn) === desiredWestFile) {
					if (tiles.indexOf(wn) === -1) tiles.push(wn);
				}

				ctr += 10;
			}

			// go down from east
			ctr = 0;
			while (ctr <= distance * 10) {
				var ws = west - ctr;

				if (ws < 100 && getFile(ws) === desiredWestFile) {
					if (tiles.indexOf(ws) === -1) tiles.push(ws);
				}

				ctr += 10;
			}
		}

		var desiredTiles = [];

		for (var i = 0; i < tiles.length; i++) {
			desiredTiles.push(getSquareFromIndex(tiles[i]));
		}

		return desiredTiles.sort();
	}

	exports.default = { TileMages: TileMages };
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var COLUMNS = 'abcdefghij'.split(''),
	    START_FEN = 'SKMASSAMKS/10/10/10/10/10/10/10/10/skmassamks r',
	    START_BOARD_FEN = '10/10/10/10/10/10/10/10/10/10',
	    START_BOARD_POSITION = fenBoardToObj(START_BOARD_FEN),
	    START_POSITION = fenToObj(START_FEN),
	    CURRENT_POSITION = void 0,
	    CURRENT_BOARD_POSITION = void 0;

	var SQUARE_SIZE = void 0,
	    BUTTON_SIZE = void 0,
	    CURRENT_TERRAFORM_TYPE = void 0,
	    SQUARE_ELS_IDS = {},
	    SQUARE_ELS_OFFSETS = void 0,
	    DRAGGED_PIECE = void 0,
	    DRAGGED_PIECE_LOCATION = void 0,
	    DRAGGED_PIECE_SOURCE = void 0,
	    DRAGGING_A_PIECE = false,
	    TERRAFORMING = false;

	var cfg = void 0,
	    containerElId = void 0,
	    containerEl = void 0,
	    terraControlsElId = void 0,
	    terraControlsEl = void 0,
	    boardEl = void 0,
	    draggedPieceEl = void 0,
	    draggedPieceId = void 0;

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
	  terraformList: 'terraform-list',
	  terraformItem: 'terraform-item',
	  terraformBtn: 'terraform-btn',
	  terraformBtnHill: 'terraform-btn-hill',
	  terraformBtnLand: 'terraform-btn-land',
	  terraformBtnWater: 'terraform-btn-water'
	};

	function load(containerElIdVal, terraControlsElIdVal, config) {
	  cfg = config || {};

	  if (!cfg.position || cfg.position === 'start') cfg.position = START_FEN;

	  if (!cfg.boardPosition || cfg.boardPosition === 'start') cfg.boardPosition = START_BOARD_FEN;

	  cfg.pieceTheme = '/public/img/{piece}.png';

	  CURRENT_POSITION = fenToObj(cfg.position);
	  CURRENT_BOARD_POSITION = fenBoardToObj(cfg.boardPosition);

	  containerElId = containerElIdVal;
	  terraControlsElId = terraControlsElIdVal;

	  var ele = document.getElementById(containerElId);
	  containerEl = $(ele);

	  var terraEle = document.getElementById(terraControlsElId);
	  terraControlsEl = $(terraEle);

	  SQUARE_SIZE = calculateSquareSize();
	  BUTTON_SIZE = calculateButtonSize();

	  console.log('BUTTON SIZE: ' + BUTTON_SIZE);

	  createElIds();

	  // create the drag piece
	  if (!draggedPieceId) draggedPieceId = uuid();

	  $('body').append(buildPiece('aS', true, draggedPieceId));
	  draggedPieceEl = $('#' + draggedPieceId);

	  containerEl.empty();
	  containerEl.html(buildBoardContainer());

	  boardEl = containerEl.find('.' + CSS.board);
	  boardEl.empty();
	  boardEl.html(buildBoard());

	  terraControlsEl.empty();
	  terraControlsEl.html(buildTerraformControls());

	  drawPositionInstant();

	  addEvents();
	}

	/********************************
		      BUILDING
	*********************************/

	function buildBoardContainer() {
	  var html = '<div class="' + CSS.tilemageboard + '">';

	  if (cfg.sparePieces === true) {
	    html += '<div class="' + CSS.sparePieces + ' ' + CSS.sparePiecesTop + '"></div>';
	  }

	  html += '<div class="' + CSS.board + '"></div>';

	  if (cfg.sparePieces === true) {
	    html += '<div class="' + CSS.sparePieces + ' ' + CSS.sparePiecesBottom + '"></div>';
	  }

	  html += '</div>';

	  return html;
	}

	function buildBoard() {
	  var html = '';

	  var alpha = deepCopy(COLUMNS);
	  var row = 10; // TEAM A ORIENTATION

	  for (var i = 0; i < 10; i++) {

	    html += '<div class="' + CSS.row + '">';

	    for (var j = 0; j < 10; j++) {
	      var square = alpha[j] + row;

	      var tileType = CURRENT_BOARD_POSITION[square] === undefined ? CSS.land : CURRENT_BOARD_POSITION[square] === 'w' ? CSS.water : CSS.hill;

	      html += '<div class="' + CSS.square + ' ' + tileType + ' ' + 'square-' + square + '" ' + 'style="width: ' + SQUARE_SIZE + 'px; height: ' + SQUARE_SIZE + 'px" ' + 'id="' + SQUARE_ELS_IDS[square] + '" ' + 'data-square="' + square + '">';

	      html += '</div>';
	    }

	    html += '<div class="' + CSS.clearfix + '"></div></div>';

	    row--;
	  }

	  return html;
	}

	function buildTerraformControls() {
	  var html = '';

	  html += '<ul class="' + CSS.terraformList + '">';

	  html += '<li class="' + CSS.terraformItem + '" style="width: ' + BUTTON_SIZE + 'px;">';
	  html += '<button id="hillBtn" class="' + CSS.terraformBtn + '">Hill</button>';
	  html += '</li>';
	  html += '<li class="' + CSS.terraformItem + '" style="width: ' + BUTTON_SIZE + 'px;">';
	  html += '<button id="landBtn" class="' + CSS.terraformBtn + '">Land</button>';
	  html += '</li>';
	  html += '<li class="' + CSS.terraformItem + '" style="width: ' + BUTTON_SIZE + 'px;">';
	  html += '<button id="waterBtn" class="' + CSS.terraformBtn + '">Water</button>';
	  html += '</li>';

	  html += '</ul>';

	  return html;
	}

	function addEvents() {
	  $('body').on('mousedown mousemove', '.' + CSS.piece, stopDefault);

	  // mouse drag pieces
	  boardEl.on('mousedown', '.' + CSS.square, mousedownSquare);

	  // mouse enter / leave square
	  boardEl.on('mouseenter', '.' + CSS.square, mouseenterSquare).on('mouseleave', '.' + CSS.square, mouseleaveSquare);

	  // pressing a terraform btn
	  $('.' + CSS.terraformBtn).on('click', findTerraformOpts);

	  $(window).on('mousemove', mousemoveWindow).on('mouseup', mouseupWindow);
	}

	// calculates square size based on the width of the container
	// got a little CSS black magic here.
	// get the width of the container element (could be anything), reduce by 1 for
	// fudge factor, and then keep reducing until we find an exact mod 10 for
	// our square size
	function calculateSquareSize() {
	  var containerWidth = parseInt(containerEl.width(), 10);

	  // defensive, prevent infinite loop
	  if (!containerWidth || containerWidth <= 0) {
	    return 0;
	  }

	  // pad one pixel
	  var boardWidth = containerWidth - 1;

	  while (boardWidth % 10 !== 0 && boardWidth > 0) {
	    boardWidth--;
	  }

	  return boardWidth / 10;
	}

	function calculateButtonSize() {
	  var containerWidth = parseInt(containerEl.width(), 10);

	  // defensive, prevent infinite loop
	  if (!containerWidth || containerWidth <= 0) {
	    return 0;
	  }

	  // pad one pixel
	  var boardWidth = containerWidth - 1;

	  while (boardWidth % 3 !== 0 && boardWidth > 0) {
	    boardWidth--;
	  }

	  return boardWidth / 3;
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
	  var team = piece.charAt(0) === 'a' ? CSS.teamA : CSS.teamB;

	  var html = '<div id="' + id + '" class="' + CSS.unit + ' ' + team + '"' + 'style="height: ' + SQUARE_SIZE / 1.5 + 'px;' + 'width: ' + SQUARE_SIZE / 1.5 + 'px; ';

	  if (hidden === true) {
	    html += 'display:none;">';
	  } else {
	    html += '">';
	  }

	  html += '<img src="' + buildPieceImgSrc(piece) + '" ';

	  html += 'alt="" ' + 'class="' + CSS.piece + '" ' + 'data-piece="' + piece + '" ' + 'style="max-width: ' + SQUARE_SIZE / 2 + 'px;' + 'max-height: ' + SQUARE_SIZE / 2 + 'px;';

	  if (hidden === true) {
	    html += 'display:none;';
	  }

	  html += '" />';

	  html += '</div>';

	  return html;
	}

	function buildPieceImgSrc(piece) {
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

	    $('#' + SQUARE_ELS_IDS[i]).empty();
	    $('#' + SQUARE_ELS_IDS[i]).append(buildPiece(CURRENT_POSITION[i], false, uuid()));
	  }
	}

	function drawBoardPositionInstant() {
	  boardEl.empty();
	  boardEl.html(buildBoard());

	  // add the pieces
	  for (var i in CURRENT_POSITION) {
	    if (CURRENT_POSITION.hasOwnProperty(i) !== true) continue;

	    $('#' + SQUARE_ELS_IDS[i]).empty();
	    $('#' + SQUARE_ELS_IDS[i]).append(buildPiece(CURRENT_POSITION[i], false, uuid()));
	  }

	  CURRENT_TERRAFORM_TYPE = null;
	  TERRAFORMING = false;
	}

	/********************************
		      EVENTS
	*********************************/
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

	function mouseupWindow(e) {
	  // do nothing if we are not dragging a piece
	  if (DRAGGING_A_PIECE !== true) return;

	  // get the location
	  var location = isXYOnSquare(e.pageX, e.pageY);

	  stopDraggedPiece(location);
	}

	function stopDraggedPiece(location) {

	  // determine if dropped of location is legal move
	  if (!$('[data-square="' + location + '"').hasClass(CSS.highlight1)) {
	    snapbackDraggedPiece();
	    return;
	  }

	  // determine what the action should be
	  var action = 'drop';
	  if (location === 'offboard' && cfg.dropOffBoard === 'snapback') {
	    action = 'snapback';
	  }
	  if (location === 'offboard' && cfg.dropOffBoard === 'trash') {
	    action = 'trash';
	  }

	  // run their onDrop function, which can potentially change the drop action
	  if (cfg.hasOwnProperty('onDrop') === true && typeof cfg.onDrop === 'function') {
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
	    if (validSquare(DRAGGED_PIECE_SOURCE) === true && validSquare(location) === true) {
	      // move the piece
	      delete newPosition[DRAGGED_PIECE_SOURCE];
	      newPosition[location] = DRAGGED_PIECE;
	    }

	    var oldPosition = deepCopy(CURRENT_POSITION);
	  }

	  // do it!
	  if (action === 'snapback') {
	    snapbackDraggedPiece();
	  } else if (action === 'trash') {
	    trashDraggedPiece();
	  } else if (action === 'drop') {
	    dropDraggedPieceOnSquare(location, newPosition);
	  }
	}

	function dropDraggedPieceOnSquare(square, newPos) {
	  removeSquareHighlights();

	  // update position
	  var newPosition = newPos;
	  delete newPosition[DRAGGED_PIECE_SOURCE];
	  newPosition[square] = DRAGGED_PIECE;

	  setCurrentPosition(newPosition);

	  // get target square information
	  var targetSquarePosition = $('#' + SQUARE_ELS_IDS[square]).offset();

	  // animation complete
	  var complete = function complete() {

	    //   drawPositionInstant();
	    draggedPieceEl.css('display', 'none');

	    // execute their onSnapEnd function
	    if (cfg.hasOwnProperty('onSnapEnd') === true && typeof cfg.onSnapEnd === 'function') {
	      cfg.onSnapEnd(DRAGGED_PIECE_SOURCE, square, DRAGGED_PIECE);
	    }
	  };

	  // snap the piece to the target square
	  var opts = {
	    duration: cfg.snapSpeed || 100,
	    complete: complete
	  };
	  draggedPieceEl.animate(targetSquarePosition, opts);

	  // set state
	  DRAGGING_A_PIECE = false;

	  if (cfg.onDrop) {
	    var lostSoldiers = cfg.onDrop(DRAGGED_PIECE_SOURCE, square);
	    if (lostSoldiers && lostSoldiers.length > 0) {

	      var newPosition = deepCopy(CURRENT_POSITION);
	      lostSoldiers.forEach(function (square) {
	        delete newPosition[square];
	        $('.square-' + square).empty();
	      });

	      setCurrentPosition(newPosition);

	      drawPositionInstant();
	    }

	    if (cfg.onTurnEnd) {
	      cfg.onTurnEnd();

	      drawPositionInstant();
	    }
	  }
	}

	function snapbackDraggedPiece() {
	  removeSquareHighlights();

	  // animation complete
	  function complete() {
	    drawPositionInstant();
	    draggedPieceEl.css('display', 'none');

	    // run their onSnapbackEnd function
	    if (cfg.hasOwnProperty('onSnapbackEnd') === true && typeof cfg.onSnapbackEnd === 'function') {
	      cfg.onSnapbackEnd(DRAGGED_PIECE, DRAGGED_PIECE_SOURCE, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION);
	    }
	  }

	  // get source square position
	  var sourceSquarePosition = $('#' + SQUARE_ELS_IDS[DRAGGED_PIECE_SOURCE]).offset();

	  // animate the piece to the target square
	  var opts = {
	    duration: cfg.snapbackSpeed,
	    complete: complete
	  };
	  draggedPieceEl.animate(sourceSquarePosition, opts);

	  // set state
	  DRAGGING_A_PIECE = false;
	}

	function mousedownSquare(e) {
	  var square = $(this).attr('data-square');

	  if (TERRAFORMING) {
	    removeSquareHighlights();

	    if (CURRENT_TERRAFORM_TYPE === 'l') CURRENT_TERRAFORM_TYPE = undefined;

	    // it is not the turn end since they attempted to terraform the same type
	    if (CURRENT_TERRAFORM_TYPE === CURRENT_BOARD_POSITION[square]) {
	      $('.terraform-btn').removeClass('selected');
	      CURRENT_TERRAFORM_TYPE = undefined;
	      TERRAFORMING = false;
	      return;
	    }

	    console.log(CURRENT_TERRAFORM_TYPE + ' does not equal ' + CURRENT_BOARD_POSITION[square]);

	    var lostSoldiers = cfg.terraform(CURRENT_TERRAFORM_TYPE, square);

	    // update the board state in this file
	    CURRENT_BOARD_POSITION[square] = CURRENT_TERRAFORM_TYPE;

	    if (cfg.onTurnEnd) {

	      cfg.onTurnEnd();

	      drawBoardPositionInstant();
	    }
	  } else {

	    // no piece on this square
	    if (validSquare(square) !== true || CURRENT_POSITION.hasOwnProperty(square) !== true) {

	      return;
	    }

	    beginDraggingPiece(square, CURRENT_POSITION[square], e.pageX, e.pageY);
	  }
	}

	function beginDraggingPiece(source, piece, x, y) {
	  if (cfg.onDragStart) {
	    var moveableSquares = cfg.onDragStart(source, piece);

	    // if clicking on the wrong color, moveable squares will be undefined
	    if (!moveableSquares) return;

	    moveableSquares.forEach(function (sq) {
	      $('[data-square="' + sq + '"]').addClass(CSS.highlight1);
	    });
	  }

	  // set state
	  DRAGGING_A_PIECE = true;
	  DRAGGED_PIECE = piece;
	  DRAGGED_PIECE_SOURCE = source;

	  // capture the x, y coords of all squares in memory
	  captureSquareOffsets();

	  var team = piece.charAt(0);

	  // create the dragged piece
	  draggedPieceEl.find('img').attr('src', buildPieceImgSrc(piece));
	  draggedPieceEl.find('img').css({ display: '' });
	  draggedPieceEl.css({
	    display: '',
	    position: 'absolute',
	    left: x - SQUARE_SIZE / 2,
	    top: y - SQUARE_SIZE / 2,
	    margin: 0
	  });

	  draggedPieceEl.removeClass(CSS.teamA);
	  draggedPieceEl.removeClass(CSS.teamB);

	  draggedPieceEl.addClass(team === 'a' ? CSS.teamA : CSS.teamB);

	  if (source !== 'spare') {
	    // highlight the source square and hide the piece
	    $('#' + SQUARE_ELS_IDS[source]).addClass(CSS.highlight1).find('.' + CSS.unit).css('display', 'none');
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
	    left: x - SQUARE_SIZE / 2,
	    top: y - SQUARE_SIZE / 2
	  });

	  // get location
	  var location = isXYOnSquare(x, y);

	  // do nothing if the location has not changed
	  if (location === DRAGGED_PIECE_LOCATION) return;

	  // remove highlight from previous square

	  // update state
	  DRAGGED_PIECE_LOCATION = location;
	}

	function findTerraformOpts(e) {
	  // remove highlights from square and btns
	  removeSquareHighlights();
	  $('.terraform-btn').removeClass('selected');

	  var options = cfg.onTerraform();

	  if (!options || options.length === 0) return;

	  var terraformType = '';

	  if ($(this).text().toLowerCase() === 'hill') terraformType = 'h';else if ($(this).text().toLowerCase() === 'water') terraformType = 'w';else terraformType = 'l';

	  // if they pressed the same button we are canceling the terraform
	  if (terraformType === CURRENT_TERRAFORM_TYPE) {
	    CURRENT_TERRAFORM_TYPE = undefined;
	    TERRAFORMING = false;
	    return;
	  }

	  CURRENT_TERRAFORM_TYPE = terraformType;

	  $(this).addClass('selected');

	  options.forEach(function (sq) {
	    $('[data-square="' + sq + '"]').addClass(CSS.highlight1);
	  });

	  TERRAFORMING = true;
	}

	/********************************
		UTILITY FUNCTIONS
	*********************************/

	// convert FEN string to position object
	// returns false if the FEN string is invalid
	function fenToObj(fen) {
	  fen = fen.split(' ')[0];
	  var rows = fen.split('/');
	  var position = {};

	  var currentRow = 1;
	  for (var i = 0; i < 10; i++) {
	    var row = rows[i].split('');
	    var colIndex = 0;

	    // loop through each character in the FEN section
	    for (var j = 0; j < row.length; j++) {
	      // number / empty squares
	      if (is_digit(row[j])) {

	        var num = row[j];

	        if (row[j] === '1') {

	          if (row[j + 1] === 0) {
	            // need to check for double digits
	            num = row[j] + row[j + 1];
	          }
	        }

	        var emptySquares = parseInt(num, 10);
	        colIndex += emptySquares;
	      }
	      // piece
	      else {
	          if (!is_digit(row[j])) {
	            var square = COLUMNS[colIndex] + currentRow;
	            position[square] = fenToPieceCode(row[j]);
	            colIndex++;
	          }
	        }
	    }

	    currentRow++;
	  }

	  return position;
	}

	function fenBoardToObj(fen) {
	  var rows = fen.split('/');
	  var position = {};

	  var currentRow = 1;
	  for (var i = 0; i < 10; i++) {
	    var row = rows[i].split('');
	    var colIndex = 0;

	    // loop through each character in the FEN section
	    for (var j = 0; j < row.length; j++) {
	      // number / empty squares
	      if (is_digit(row[j])) {

	        var num = row[j];

	        if (row[j] === '1') {

	          if (row[j + 1] === 0) {
	            // need to check for double digits
	            num = row[j] + row[j + 1];
	          }
	        }

	        var emptySquares = parseInt(num, 10);
	        colIndex += emptySquares;
	      }
	      // tile
	      else {
	          if (!is_digit(row[j])) {
	            var square = COLUMNS[colIndex] + currentRow;
	            position[square] = row[j];
	          }
	          colIndex++;
	        }
	    }

	    currentRow++;
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

	  var currentRow = 0;
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

	    currentRow++;
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
	  return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    return r.toString(16);
	  });
	}

	function validSquare(square) {
	  if (typeof square !== 'string') return false;

	  return square.search(/[a-j]([1-9]|10)/) !== -1;
	}

	function validPositionObject(pos) {
	  if ((typeof pos === 'undefined' ? 'undefined' : _typeof(pos)) !== 'object') return false;

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
	  return code.search(/[ab][SMKA]/) !== -1;
	}

	// convert bP, wK, etc code to FEN structure
	function pieceCodeToFen(piece) {
	  var tmp = piece.split('');

	  // teamA piece
	  if (tmp[0] === 'a') {
	    return tmp[1].toUpperCase();
	  }

	  // teamB piece
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
	    if (x >= s.left && x < s.left + SQUARE_SIZE && y >= s.top && y < s.top + SQUARE_SIZE) {
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
	  // if (oldFen === newFen) return;

	  // run their onChange function
	  /*  if (cfg.hasOwnProperty('onChange') === true &&
	      typeof cfg.onChange === 'function') {
	      cfg.onChange(oldPos, newPos);
	    }*/

	  // update state
	  CURRENT_POSITION = position;
	}

	function removeSquareHighlights() {
	  boardEl.find('.' + CSS.square).removeClass(CSS.highlight1 + ' ' + CSS.highlight2);
	}

	exports.default = { load: load };
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* clearfix */\n.clearfix-7da63 {\n  clear: both; }\n\nbody {\n  position: relative; }\n\n/* board */\n.board-b72b1 {\n  border: 2px solid #404040;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.row-5277c .square-55d63:first-child {\n  border-left: 1px solid #888; }\n\n.row-5277c .square-55d63:first-child .tile {\n  border-top: 1px solid #888; }\n\n/* square */\n.square-55d63 {\n  float: left;\n  position: relative;\n  box-sizing: border-box;\n  border-right: 1px solid #888;\n  border-bottom: 1px solid #888;\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n  /* disable any native browser highlighting */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.highlight1-32417, .highlight2-9c5d2 {\n  -webkit-box-shadow: inset 0 0 3px 3px yellow;\n  -moz-box-shadow: inset 0 0 3px 3px yellow;\n  box-shadow: inset 0 0 3px 3px yellow; }\n\n.land0 {\n  background-color: #71B16E; }\n\n.land1 {\n  background-color: #287324; }\n\n.water0 {\n  background-color: blue; }\n\n.unit-a2H1d {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 10%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  background-color: purple;\n  background-position: 0 0;\n  background-repeat: round;\n  border: 2px solid black; }\n\n.unit-a2H1d.teamB-1e1d7 {\n  background-color: white;\n  color: white; }\n\n.unit-a2H1d.teamA-3c85d {\n  background-color: #C23A4C;\n  color: #C23A4C; }\n\n.unit-a2H1d img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 10%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.terraform-list .terraform-item {\n  display: inline-block;\n  font-size: 14pt; }\n  .terraform-list .terraform-item .terraform-btn {\n    font-size: 10pt;\n    padding: 8px 6px;\n    box-sizing: border-box;\n    width: 100%; }\n    .terraform-list .terraform-item .terraform-btn.selected {\n      -webkit-box-shadow: inset 0 0 3px 3px yellow;\n      -moz-box-shadow: inset 0 0 3px 3px yellow;\n      box-shadow: inset 0 0 3px 3px yellow; }\n    .terraform-list .terraform-item .terraform-btn#hillBtn {\n      border: 2px solid #287324;\n      background-color: #3cad36; }\n    .terraform-list .terraform-item .terraform-btn#landBtn {\n      border: 2px solid #71B16E;\n      background-color: #a2cca0; }\n    .terraform-list .terraform-item .terraform-btn#waterBtn {\n      border: 2px solid blue;\n      background-color: #4d4dff; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/aA.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/aK.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/aM.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/aS.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/bA.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/bK.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/bM.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/bS.png";

/***/ }
/******/ ])
});
;