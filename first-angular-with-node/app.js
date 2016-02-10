var app = require('./config/app_config');
var db = require('./config/db_config');
var usuarios = require('./routes/usuarioRouter');
var produtos = require('./routes/produtoRouter');


app.get('/', function(req, res) {
	res.end('Bem-vindo a API de autenticação');
});

//rotas
app.use('/usuarios',usuarios);
app.use('/produtos',produtos);