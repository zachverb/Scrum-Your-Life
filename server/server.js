var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var models = require('./models');
var boards = require('./routes/boards.js');
var tasks = require('./routes/tasks.js');
var signin = require('./routes/signin.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/api/boards', boards);
app.use('/api', signin);

app.get('/', function(req, res) {
  res.render('index.html');
});

models.sequelize.sync({force: true}).then(function () {
  app.listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
  });
});
