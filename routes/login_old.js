const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/Users');


// Login Page
//const { forwardAuthenticated } = require('../public/js/auth');
//router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })(req, res, next);
});

router.get("/", (req, res) =>
    User.findAll()
    .then(User =>{
        console.log(User);
    })
   .catch(err => console.log(err)));

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.send('You are logged out');
    res.redirect('/login');
  });

module.exports = router;