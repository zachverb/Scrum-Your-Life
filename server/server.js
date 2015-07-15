var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var models = require('./models');
var boards = require('./routes/boards.js');
var tasks = require('./routes/tasks.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/boards', boards)

app.get('/', function(req, res) {
	res.sendStatus(200);
});

models.sequelize.sync({force: true}).then(function () {
	app.listen(3000, function() {
		console.log('Express server listening on port ' + 3000);
	});
});
