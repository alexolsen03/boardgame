import { TileMages } from './lib/tilemages';
import { load } from './lib/board';

require('./main.scss');
require('file?name=[path][name].[ext]!./public/img/aA.png');
require('file?name=[path][name].[ext]!./public/img/aK.png');
require('file?name=[path][name].[ext]!./public/img/aM.png');
require('file?name=[path][name].[ext]!./public/img/aS.png');
require('file?name=[path][name].[ext]!./public/img/bA.png');
require('file?name=[path][name].[ext]!./public/img/bK.png');
require('file?name=[path][name].[ext]!./public/img/bM.png');
require('file?name=[path][name].[ext]!./public/img/bS.png');

export default {
	TileMages,
	load
}