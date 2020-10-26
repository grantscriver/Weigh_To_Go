// Requiring our models
const db = require('../models');
const passport = require('../middleware/passport');


module.exports = function (app) {
  
  app.post('/api/User', passport.authenticate('local'), function (req, res) {
    res.json(req.User);
  });

  app.post('/api/User', function (req, res) {
    db.User.create({
      username: req.body.username,
      gender: req.body.gender,
      age: req.body.age,
      current_height: req.body.current_height,
      current_weight: req.body.current_weight,
      current_date: req.body.current_date,
      goal_weight: req.body.goal_weight,
      password: req.body.passoword, 
      password2: req.body.password2
    })
  });
}

//Create new food diary log
//update new current_weight

