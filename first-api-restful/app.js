var app = require('./config/app_config');
var db = require('./config/db_config');
var Protudo = require('./models/Produto');
var produtoController = require('./controllers/produtoController');
var produtos = require('./routes/produtoRouter');

app.get('/', function(req, res) {
	res.end('Bem-vindo a API de produtos');
});

//rotas de produtos

app.use('/produtos',produtos);