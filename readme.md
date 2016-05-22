# Tile Mages
---
### Game Rules
Tile Mages is a board game designed by yours truly.  The goal of the game is to remove the opponent's two mages from the board.

You remove opponents pieces by having a higher attack power than they have defense power.

Power is calculated by piece type, neighboring piece type, and terrain.

Pieces have the following values:

| Type | Power  | Defense  | Max Movement |
| ---- |:------:| :-------:| :-----------:|
| Knight      | 1 | 1 | 3 |
| Archer      | 1 | 0 | 2 |
| Soldier     | 1 | 1 | 2 |
| Mage        | 0 | 0 | 2 |

- Knights and Soldiers can only attack adjacent spaces.
- Archers attack in a circle 1 space away and do not provide defensive power

There are 3 types of terrain.
- land
- water
- hills

Land provides no bonuses.  Water blocks movement.  Hills provide +1 attack and/or defense if a unit is stationed there (even if that unit is a mage).

Using the above rules, let us assume the red player moves a Knight to a hill space.  The red Knight on the hill has no friendly red units adjacent to it, so it would have 2 POWER and 2 DEFENSE.  It is now the white player's turn.  He moves 2 soldier units adjacent to that red knight.  Both soldier units are adjacent to eachother as well.  Because of this, their power and defense gets calculated as 2 POWER 2 DEFENSE.  This means there are no casualties.  The red player then moves an archer behind his knight and ends his turn.  The archer attacks 2 spaces away, so both white soldiers are now taking 3 damage (2 from the knight, 1 from the archer), while only providing 2 defense (1 each).  Therefore, they will both be removed from play.

---

### Code

To use this library, add the following to your node package.json file
```sh
"boardgame": "https://github.com/alexolsen03/boardgame#testing"
```

To create an instance of this game:
```sh
import load from 'boardgame';
load('divBoardId','divTerraformControlsId');
```
Replace 'divBoardId' with the id of the div you want the board to be created in.  Likewise replace 'divTerraformControlsId' with the div you want the terraform buttons to be placed in;

Example:
```sh
<div id='board'>
</div>
<div id='terraControls'>
</div>

<script>
    load('board','terraControls');
</script>
```
You must set the default size of board, but the board will be dynamically constructed according to its dimensions.


To provide game rules, you can make an instance of TileMages with the following.

```sh
var tileMages = new TileMages('start', 'start');
```

The first parameter is a piece FEN, the second is a board FEN.  If 'start' is passed they will default to the starting positions.

To hook the two up, you can provide an optional configuration object to the load() function containing functions to be called at certain points.

```sh
let tileMages = new TileMages('start', 'start');

let onDragStart = function(source, piece){
	return tileMages.generateMoveOptions(source);
}

let onDrop = function(source, target){
	if(source !== target)
		return tileMages.move({from: source, to: target}); // lost soldiers
}

let onTerraform = function(){
	return tileMages.generateTerraformOptions();
}

let terraform = function(type, square){
	return tileMages.terraform(type, square);	// returns lost soldiers
}

let onTurnEnd = function(){
    // handle turn end
}

let cfg = {
	onDragStart: onDragStart,
	onDrop: onDrop,
	position: 'start',
	boardPosition: 'start',
	dropOffBoard: 'snapback',
	onTerraform: onTerraform,
	terraform: terraform,
	onTurnEnd: onTurnEnd
}

load('board','terraControls', cfg);
```

Enjoy.