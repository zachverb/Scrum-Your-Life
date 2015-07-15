var models = require('../models');
var router = require('express').Router({mergeParams: true});

router.route('/')
	// return all the tasks
	.get(function(req, res) {
		models.Task.findAll().then(function(tasks) {
			res.json(tasks);
		}).catch(function(err) {
			res.sendStatus(500);
		})
	})

	.post(function(req, res) {
		models.Task.create({
			title: req.body.title,
			estimate: req.body.estimate,
			description: req.body.prediction,
			state: req.body.state
		}).then(function(task) {
			res.json(task);
		}).catch(function(err) {
			res.sendStatus(500);
		})
	});

router.route('/:task_id')
	.get(function(req, res) {
		models.Task.findById(
			req.params.task_id
		).then(function(task) {
			if(task) {
				res.json(task);
			} else {
				res.sendStatus(404);
			}
		}).catch(function(err) {
			console.log("err getting task " + req.params.task_id + ": " + err);
			res.sendStatus(500);
		})
	})

	.delete(function(req, res) {
		models.Task.update({
			deleted: true
		}, {
			where: {
				id: req.params.task_id
			}
		}).then(function(task) {
			res.sendStatus(200);
		}).catch(function(err) {
			console.log("err getting task " + req.params.task_id + ": " + err);
			res.sendStatus(500);
		})
	});

router.route('/:task_id/state')
	.post(function(req, res) {
		models.Task.update({
			state: req.body.state
		}, {
			where: {
				id: req.params.task_id
			}
		}).then(function(task) {
			res.sendStatus(200);
		}).catch(function(err) {
			console.log("err getting task " + req.params.task_id + ": " + err);
			res.sendStatus(500);
		})
	});


module.exports = router;