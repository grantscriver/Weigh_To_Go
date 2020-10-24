const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

//import model folder
const db = require('../models');

//Test routes
//router.get("/", (req, res) => res.send("Success!"));

//within model folder get info from each separate table
router.get("/", (req, res) =>    
    db.Calorie_user.findAll()
    .then(Calorie_user =>{
        console.log(db.Calorie_user);
    })
    .catch(err => console.log(err)));

router.get("/", (req, res) =>
    db.Calorie_counter.findAll()
    .then(Calorie_counter =>{
        console.log(db.Calorie_counter);
    })
    .catch(err => console.log(err)));



//add info
router.post("/api/models/Calorie_user", (req, res) => {
    db.Calorie_user.create({

    }).then  
})
//add food diary entry
router.post("/api/models/Calorie_counter", (req, res) => {
    db.Calorie_counter.create({

    }).then 
})


    
module.exports = router;