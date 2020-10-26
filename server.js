const express = require("express");
const app = express();
const passport = require("passport");

//handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view-engine", "handlebars");

//express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting static folder
app.use(express.json());
app.use(express.static("public"));

//connecting DB
const db = require("./models");

//landing page and navbar route
app.get("/", (req, res) =>
  res.render("login.handlebars", { layout: "landingPg" })
);
app.get("/login", (req, res) => res.render("login.handlebars"));
app.get("/register", (req, res) => res.render("register.handlebars"));
app.get("/Calorie_counter", (req, res) =>
  res.render("Calorie_counter.handlebars")
);
app.get("/graph", (req, res) => res.render("Graph.handlebars"));
app.get("/dashboard", (req, res) => res.render("dashboard.handlebars"));

//tell the app to use the file paths in the routes folder
//this route creates and posts the new users
app.use("/users", require("./routes/apiRoutes.js"));

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
