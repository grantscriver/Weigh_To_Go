// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // load login page
  app.get("/", function (req, res) {
    res.render("login.handlebars", { layout: "landing" });
  });
  app.get("/signup", function (req, res) {
    res.render("signup.handlebars", { layout: "landing" });
  });
  app.get("/update", (req, res) =>
    res.render("update.handlebars", { layout: "main" })
  );

  app.get("/Calorie_counter", (req, res) =>
    db.Calorie_counter.findAll().then(function (foodData) {
      var foodDataArray = [];
      for (var i = 0; i < foodData.length; i++) {
        foodDataArray.push({
          foodname: foodData[i].foodname,
          food_calories_uom: foodData[i].food_calories_uom,
          servings_consumed: foodData[i].servings_consumed,
          total_calories: foodData[i].total_calories,
        });
      }
      res.render("../views/Calorie_counter.handlebars", {
        foodData: foodDataArray,
      });
    })
  );

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", isAuthenticated, function (req, res) {
    res.render("dashboard.handlebars");
  });
};
