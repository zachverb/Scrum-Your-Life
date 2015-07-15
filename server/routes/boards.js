var models = require('../models');
var router = require('express').Router();
var taskRoutes = require('./tasks.js');

router.use('/:board_id/tasks', taskRoutes)

router.route('/')
    .get(function(req, res) {
        models.Board.findAll().then(function(boards) {
      console.log("ayo");
            res.json(boards)
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        })
    })

	.post(function(req, res) {
		models.Board.create({
			title: req.body.title
		}).then(function(board) {
			res.json(board);
		}).catch(function(err) {
			console.log(err);
			res.sendStatus(500);
		})
	});

router.route('/:board_id')
  .get(function(req, res) {
    models.Board.findById(
      req.params.board_id
    ).then(function(board) {
      res.json(board);
    }).catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    })
  })



module.exports = router;