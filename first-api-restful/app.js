var app = require('./config/app_config');
var db = require('./config/db_config');

app.get('/', function(req, res) {
	var pessoa = {
		nome: 'Rodrigo Schmitz'
	}
	res.json(pessoa);
});