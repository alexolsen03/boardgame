import { TileMages } from './tilemages';
import { load } from './board';

let tileMages = new TileMages('start');

let onDragStart = function(source, piece){
	console.log('drag starting');
	console.log(source);
	return tileMages.generateMoveOptions(source);
}

let onDrop = function(source, target){
	let move = tileMages.move({from: source,
					to: target});
}

let cfg = {
	onDragStart: onDragStart,
	onDrop: onDrop,
	position: 'start'
}

load('abc', cfg);