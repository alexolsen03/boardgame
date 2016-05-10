import { TileMages } from './tilemages';
import { load } from './board';

let tileMages = new TileMages('start');

let onDragStart = function(source, piece){

	let color = piece.charAt(0) === 'a' ? 'r' : 'w';

	console.log(tileMages.turn, color);

	if(color !== tileMages.turn)
		return;

	console.log('still here bro');
	return tileMages.generateMoveOptions(source);
}

let onDrop = function(source, target){

	if(source !== target)
		return tileMages.move({from: source, to: target});	// return lost soldiers
}

let onTerraform = function(){
	return tileMages.generateTerraformOptions();
}

let terraform = function(type, square){
	return tileMages.terraform(type, square);	// returns lost soldiers
}

let cfg = {
	onDragStart: onDragStart,
	onDrop: onDrop,
	position: 'start',
	dropOffBoard: 'snapback',
	onTerraform: onTerraform,
	terraform: terraform
}

load('abc','terracontrols',cfg);