const multer = require( 'multer' );
const bodyParser = require('body-parser');
const urlBodyParser = bodyParser.urlencoded({ extended: true, limit: '1mb' });
const jsonBodyParser = bodyParser.json();
const defaultBodyParser = bodyParser();

module.exports = function( express, app ){
	app.get('/', function(req, res) {
		res.render('index.html');
	});

	app.get('/examples/autocomplete', function(req, res) {
		res.render('examples/autocomplete.html', {adam: 'adam'});
	});
};
