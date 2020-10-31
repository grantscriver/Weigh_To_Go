// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the dashboard page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      gender: req.body.gender,
      age: req.body.age,
      current_height: req.body.current_height,
      current_weight: req.body.current_weight,
      goal_weight: req.body.goal_weight,
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user username
      res.json({
        username: req.user.username,
        gender: req.user.gender,
        age: req.user.age,
        current_height: req.user.current_height,
        current_weight: req.user.current_weight,
        goal_weight: req.user.goal_weight,
      });
    }
  });

  app.post("/api/calorie", function (req, res) {
    //create new data from front end date and save to database
    var foodCalorie = {
      foodname: req.body.foodname,
      food_calories_uom: req.body.food_calories_uom,
      servings_consumed: req.body.servings_consumed,
      total_calories: req.body.total_calories,
    };

    db.Calorie_counter.create(foodCalorie).then(function (newFoodData) {
      res.json(newFoodData);
    });
  });
};
