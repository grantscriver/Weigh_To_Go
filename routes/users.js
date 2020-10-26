const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Get previous food diaries
//router.get('/', (req, res) => 
//  Calorie_counter.findAll()
//    .then(Calorie_counter => res.render('Calorie_counter', {
//        Calorie_counter
//      }))
//    .catch(err => res.render('error', {error: err})));

// Display new user registration form
router.get('/register', (req, res) => res.render('register'));

//Register the new user
router.post('/register', (req, res) => {
  let { username, 
    gender, 
    age, 
    current_height, 
    current_weight, 
    current_date,
    desire_weight,
    calories_goal,  
    password, 
    password2  } = req.body;

  let errors = [];

  // Validate Fields
  if (!username|| !gender|| !age|| !current_height|| !current_weight|| !weight_goal|| !password|| !password2 ) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('register', {
      errors,
      username, 
      gender, 
      age, 
      current_height, 
      current_weight, 
      current_date,
      desire_weight,
      calories_goal,  
      password, 
      password2 
    });
  } else {
    User.findOne({ username: username }).then(user => {
      if (user) {
        errors.push({ msg: 'Username already exists' });
        res.render('register', {
          id, 
          username, 
          gender, 
          age, 
          current_height, 
          current_weight, 
          current_dat, 
          calories_goal, 
          weekly_loss_goal, 
          target_calories, 
          password, 
          password2 
        });
      } else {
        const newUser = new User({
          id, 
          username, 
          gender, 
          age, 
          current_height, 
          current_weight, 
          current_dat, 
          calories_goal, 
          weekly_loss_goal, 
          target_calories, 
          password, 
          password2 
        });

//Hash user password
/*       bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.send(
                  "You are now registered"
                );
                res.redirect('/dashboard');
              })
              .catch(err => console.log(err));
          });
        });
//User can look at previous food diaries   
        User.associate = function (models) {
          User.hasMany(models.Calorie_counter);
        }
      */ 
          
     }
    });
  }
});
 
module.exports = router;