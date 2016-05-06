const TEAM_A = 'r';
const TEAM_B = 'w';

const SOLDIER = 's';
const KNIGHT 	 = 'k';
const MAGE     = 'm';
const ARCHER = 'a';

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
a10:     0, b10:    1, c10:    2, d10:   3, e10:  4, f10:  5, g10:   6,  h10:   7,     i10: 8,  j10: 9,
  a9:   10,   b9:  11,   c9:   12, d9:  13, e9:  14, f9:  15, g9:  16,     h9:  17,    i9: 18,    j9: 19,
  a8:   20,   b8:   21,  c8:   22, d8:  23, e8:  24, f8:  25, g8:   26,    h8:   27,	i8: 28,  j8: 29,
  a7:   30,   b7:   31,  c7:  32, d7:  33, e7:   34, f7:  35, g7:  36,      h7:  37,	i7: 38,  j7: 39,
  a6:   40,   b6:   41,   c6:  42, d6:  43, e6:  44, f6:  45, g6:  46,     h6:  47,	i6: 48,  j6: 49,
  a5:   50,   b5:   51,   c5:  52, d5:  53, e5:  54, f5:  55, g5:  56,     h5:  57,	i5: 58,  j5: 59,
  a4:   60,   b4:   61,   c4:  62, d4:  63, e4:  64, f4:  65, g4:  66,     h4:  67,	i4: 68,  j4: 69,
  a3:   70,   b3:   71,   c3:  72, d3:  73, e3:  74, f3:  75, g3:  76,     h3:  77,	i3: 78,  j3: 79,
  a2:   80,   b2:   81,   c2:  82, d2:  83, e2:  84, f2:  85, g2:  86,     h2:  87,	i2: 88,  j2: 89,
  a1:   90,   b1:   91, c1:    92, d1:  93, e1:  94, f1:  95, g1:  96,     h1:  97,	i1: 98,  j1: 99,
};

const DEFAULT_POSITION = 'skmassamks/10/10/10/10/10/10/10/10/SKMASSAMKS';

class TileMages {

	constructor(fen){
		this.board = new Array(100);
		this.squares = SQUARES;

		if (typeof fen === 'undefined') {
			this.load(DEFAULT_POSITION);
		} else {
			this.load(fen);
		}
	}

	load(fen){
		let tokens = fen.split(/\s+/);	// make an array
		let position = tokens[0];
		let square = 0;

		for( let i=0; i<this.board.length; i++){
			let piece = position.charAt(i);

			if(piece === '/'){
//				square++;
			}else if(is_digit(piece)){
				var num = parseInt(piece, 10);

				if(num === 1){
					if(is_digit(fen.charAt(i + 1))){
						num = parseInt(fen.substr(i, i+2), 10);
					}
				}

				square += num;
			}else{
				let color = (piece <= 'a') ? TEAM_A : TEAM_B;

				this.put({
					color: color,
					type: piece.toLowerCase()
				}, square);

				// need to find a way for the above square to be
				// the right value

				square++;
			}
		}

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


}

function is_digit(c) {
	return '0123456789'.indexOf(c) !== -1;
}

export { TileMages };