const express = require("express");
const { createClient } = require("redis");
const { compareSync } = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

const redisClient = createClient();
redisClient.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.get(`user:${username}`);

    // CompareSync hash the first argument and check it with second argument
    if (compareSync(password, dbPassword)) {
        // If correct username and password given, send a JWT with following payload
        const token = jwt.sign(
            { username: username, canViewProtected: true },
            "mySecretKey"
        );
        // Web save token in a cookie
        res.cookie("token", token);
        res.send("Logged in");
    } else {
        res.status(401).send("Invalid credentials.")
    }
});

app.get("/protected", (req, res, next) => {
    // Get payload from cookies
    const token = req.cookies.token;

    // Invalid token gives an error
    try {
        const payload = jwt.verify(token, "mySecretKey"); // {username: username. canViewProtected: true}
        if (payload.canViewProtected) {
            next();
        } else {
            res.status(401).send("Not permitted.")
        }
    } catch (err) {
        res.send(err);
    }
});
    
app.use(express.static("public"));