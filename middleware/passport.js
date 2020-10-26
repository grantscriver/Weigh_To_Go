const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/Users');

// Login page authentication
//const { forwardAuthenticated } = require('../public/js/auth');
//router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

//API call to Users to retrieve Users
router.get("/", (req, res) =>
    User.findAll()
    .then(User =>{
        console.log(User);
    })
   .catch(err => console.log(err)
));

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ username: 'username' }, (username, password, done) => {
  
//Search usernames
            User.findOne({
              username: username
            }).then(user => {

//If no matching username throw error 
                    if (!user) {
                        return done(null, false, { message: 'This Username is not registered' });
                    } else {
//Next match password
                        bcrypt.compare(password, user.password, (err, isMatch) => {
//If no match throw error password is incorrect
                            if (err) throw err;
                            if (isMatch) {
//Login redirect to dashboard
                                router.post('/login', (req, res, next) => {
                                    passport.authenticate('local', {
                                        successRedirect: '/dashboard',
                                        failureRedirect: '/login',
                                    })(req, res, next);
                                })
                            } 
                        });

                    };
            });
        });
    );          
};

/*
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

// Logout
  router.get('/logout', (req, res) => {
      req.logout();
      req.send('You are logged out');
      res.redirect('/login');
  });  
}; 
  
*/