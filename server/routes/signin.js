var models = require("../models");
var router = require('express').Router();
var bcrypt = require('bcrypt');
var randomstring = require("randomstring");

router.post('/authenticate', function(req, res) {
  models.User.find({where:{ email: req.body.email }})
    .then(function(user) {
      if (user) {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if(err || result === false) {
            res.sendStatus(400)
          } else {
            console.log("ALLOWED!!");
            res.json({
              data: user,
              token: user.token
            });
          }
        });
      } else {
        res.sendStatus(401);
        console.log("NOT ALLOWED");
      }
    }).catch(function(err) {
      console.log("Authentication err: " + err);
      res.sendStatus(500);
    })
});

router.post('/signup', function(req, res) {
  models.User.find({ where:
      {  email: req.body.email }
  }).then(function(user) {
      if (user) {
        console.log("models.User exists");
        res.sendStatus(409);
      } else {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
          if(err) {
            console.log("Error storing hash!");
            res.sendStatus(500);
          } else {
            models.User
              .create({
                email: req.body.email,
                password: hash,
                token: randomstring.generate()
              }).then(function(user) {
                res.json({
                  id: user.id,
                  token: user.token
                });
              }).catch(function(err) {
                console.log("Error creating user " + err);
                res.sendStatus(500);
              })
          }
        });
      }
    })
    .catch(function(err) {
      console.log("err signup " + err);
      res.sendStatus(500);
    });
});

module.exports = router;