var db = require("../models");
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    //automatically redirect to the login page first
    res.redirect("/login");
  });

  //login
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    //res.render("login.handlebars", { layout: "landingPg" })
  });

  //signup
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    //res.render("signup.handlebars");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the login page
  app.get("/dashboard", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    //res.render("dashboard.handlebars");
  });

  app.get("/graph", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/graph.html"));
    //res.render ("graph.handlebars");
  });
}