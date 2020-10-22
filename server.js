const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

//connecting DB
const db = require('./models');

const app = express();
app.get("/", (req, res) => res.send("INDEX"));

//routes
app.use("/app", require("./routes/app"));

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  

