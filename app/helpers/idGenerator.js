/**
 * Id Generator
 * @module helpers/idGenerator
 */

const idLength = 8;
const timestamp = +new Date;

const _getRandomInt = function( min, max ) {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

function generate () {
	var ts = timestamp.toString();
	var parts = ts.split( "" ).reverse();
	var id = "";

	for( var i = 0; i < idLength; ++i ) {
		var index = _getRandomInt( 0, parts.length - 1 );
		id += parts[index];
	};

	return id;
};

module.exports = {generate};