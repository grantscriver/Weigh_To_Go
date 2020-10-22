const express = require("express");
const path = require("path");
const router = express.Router();
const db = require('../models');

//Test routes
//router.get("/", (req, res) => res.send("Success!"));


router.get("/", (req, res) =>    
    db.Calorie_user.findAll()
    .then(Calorie_user =>{
        console.log(db.Calorie_user);
    })
    .catch(err => console.log(err)));


module.exports = router;