// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../middleware/isAuthenticated");
module.exports = function (app) {
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/login");
    }
    console.log("in app get /");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/Calorie_counter", (req, res) =>
    res.render("Calorie_counter.handlebars")
  );
  app.get("/graph", (req, res) => res.render("Graph.handlebars"));

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/login");
    }
    console.log("in app get /login");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", isAuthenticated, function (req, res) {
    console.log("in app get /dashboard");
    res.render("dashboard.handlebars");
  });
};
