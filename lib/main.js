import { TileMages } from './tilemages';
import { load } from './board';

let tileMages = new TileMages('start');

let onDragStart = function(source, piece){

	let color = piece.charAt(0) === 'a' ? 'r' : 'w';

	if(color !== tileMages.turn)
		return;

	return tileMages.generateMoveOptions(source);
}

let onDrop = function(source, target){

	if(source !== target)
		tileMages.move({from: source, to: target});
}

let cfg = {
	onDragStart: onDragStart,
	onDrop: onDrop,
	position: 'start',
	dropOffBoard: 'snapback'
}

load('abc', cfg);