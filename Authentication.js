const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = []

app.post("/users", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //console.log(salt)
        //console.log(hashedPassword)
        const user = {name: req.body.username, password: req.body.hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post("/users/login", async (req, res) => {
    const user = users.find(user =>user.username = req.body.username)    
        if (user = null) {
            return res.status(400).send("Cannot find user...")
        }
        try {            
            if (await bcrypt.compare(req.body.password, user.password)) {
               res.send("Success!")//run welcome page
            } else {
               res.send("Password is Incorrect")
            }
        } catch {
        res.status(500).send()
    }
})

app.listen(3000);