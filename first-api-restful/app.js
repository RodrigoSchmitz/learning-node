var express = require('express');
var bodyParser = require('body-parser');
var port = '3000';

var app = express();

app.listen(port);

app.get('/', function(req, res) {
	var pessoa = {
		nome: 'Rodrigo Schmitz'
	}
	res.json(pessoa);
});