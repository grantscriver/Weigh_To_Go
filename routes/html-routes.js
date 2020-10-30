// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../middleware/isAuthenticated");

module.exports = function(app) {


app.get("/", function(req, res) {
if (req.user) {
  res.redirect("/login");
}

res.sendFile(path.join(__dirname, "../public/login.html"));
//res.render("signup.handlebars", { layout: "landingPg" })
}
  


);
/*
app.get("/login", (req, res) => res.render("login.handlebars"));
app.get("/calorie_user", (req, res) => res.render("calorie_user.handlebars"));
app.get("/Calorie_counter", (req, res) =>
  res.render("Calorie_counter.handlebars")
);
app.get("/graph", (req, res) => res.render("Graph.handlebars"));
app.get("/dashboard", (req, res) => res.render("dashboard.handlebars"));
*/
/*
  app.get("/", function(req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
*/
//app.get("/dashboard", (req, res) => res.render("dashboard.handlebars"));

app.get("/Calorie_counter", (req, res) =>
  
db.Calorie_counter.findAll().then(function (foodData) {
  var foodDataArray = [];
for (var i = 0; i< foodData.length; i++) {
  foodDataArray.push({foodname: foodData[i].foodname, food_calories_uom: foodData[i].food_calories_uom,servings_consumed: foodData[i].servings_consumed,total_calories: foodData[i].total_calories})
}


  res.render("../views/Calorie_counter.handlebars", {foodData: foodDataArray})
  //res.render("../views/Calorie_counter.handlebars", {foodData: [{foodname: 'asdf'},{foodname: 'lglg'}]})
  
  

  //console.log(foodData);
  //console.log(foodData.length);
  //res.render("../views/Calorie_counter.handlebars", {tempData: [{foodname: 'asdf'},{foodname: 'lglg'}]})
  //res.render("Calorie_counter.handlebars", tempData)
})
//res.render("Calorie_counter.handlebars")
);

app.get("/graph", (req, res) => res.render("Graph.handlebars"));

app.get("/login", function(req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/login");
    }

    res.sendFile(path.join(__dirname, "../public/login.html"));
    //res.render("login.handlebars", { layout: "landingPg" })
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", isAuthenticated, function(req, res) {
    
    //res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    res.render("dashboard.handlebars")
  });
  
};