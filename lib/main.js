import { TileMages } from './tilemages';
import { load } from './board';

let tileMages = new TileMages('start');

let onDragStart = function(source, piece){
	console.log('drag starting');
	console.log(source);
	return tileMages.move({from: source});
}

let cfg = {
	onDragStart: onDragStart,
	position: 'start'
}

load('abc', cfg);