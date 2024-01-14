// npm install express, body-parser, redis, bcrypt, jsonwebtoken
const express = require("express");
const bodyParser = require("body-parser");
const { createClient } = require("redis");
const { compareSync, hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = 8000;

const app = express();
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));

const redisClient = createClient();
redisClient.connect();
app.use(express.static("public"));

// User can log in with a unique username and password
app.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.hGet(`user:${username}`, `password`);
    if (compareSync(password, dbPassword)) {
        // If correct username and password given, send a JWT with following payload
        const token = jwt.sign(
            { username: username, canViewProtected: true },
            "mySecretKey"
        );
        // Web save token in a cookie
        res.cookie("token", token);
        res.status(200).send("Logged in");
    } else {
        res.status(401).send("Invalid credentials.")
    }
});

app.post("/register", async(req, res) => {
    const { username, password } = req.body;
    if (!(await redisClient.exists(`user:${username}`))) {
        // The password is saved hashed and salted in the database
        const hashedPassword = hashSync(password, 10);
        await redisClient.hSet(`user:${username}`, {password:hashedPassword});
        res.send("<script>document.getElementById('registerStatus').innerHTML = 'Registered!';</script>")
    } else {
        // res.send(JSON.stringify("registered"));
        // res.json({message: "registered"});
        res.send("This username is already used.")
        // res.send("<script>document.getElementById('registerStatus').innerHTML = 'This username is already used.';</script>")
    }

});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});