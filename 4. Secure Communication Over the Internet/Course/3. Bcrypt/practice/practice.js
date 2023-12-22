// Hash and Salt
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const bodyParser = require("body-parser");
const { hashSync, compareSync } = require("bcrypt");

const app = express();
const PORT = 8000;
const redisClient = createClient();
redisClient.connect();
const redisStore = new RedisStore({client: redisClient, prefix: "session:"});

app.use(bodyParser.urlencoded({extended: false}));
app.use(
    session({
        secret: "myUnsafeSecret",
        saveUninitialized: false,
        resave: false,
        store:redisStore,
    })
);

app.get("/protected", (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.status(401).send("Not permitted.");
    }
});

// Add a hardcoded username and password to /login in express. If the user sends with the correct login, they should now have access to /protected. Also, make sure that users who are not logged in do not have access to /protected
// app.post("/login", (req, res) => {
//     const {username, password} = req.body;
//     if (username === "Rona" && password === "123") {
//         req.session.isLoggedIn = true;
//         res.redirect("/protected");
//     } else {
//         res.status(401).send("Invalid credentials.");
//     }
// });

// Store the passwords in a database instead of in the code.
app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const dbPassword = await redisClient.hGet(`user:${username}`, `password`);
    const isAdmin = await redisClient.hGet(`user:${username}`, `isAdmin`);
    // if (password === dbPassword) {
    if (compareSync(password, dbPassword)) {
        req.session.isLoggedIn = true;    
        // Difficult: Add an extra field to the database that determines if a user is admin or not (https://redis.io/docs/data-types/hashes/). An admin sees the text welcome admin!
        if (isAdmin === "Y") {
            res.send('<script>alert("Welcome admin"); window.location.href="/";</script>');
        } else {
            // Add the welcome text instead to “Welcome {username}!”
            res.send('<script>alert("Welcome"); window.location.href="/";</script>');
        }
        // Prevent the form from redirecting to /login but only sending a reqeust to /login
        // res.redirect("/protected");
    } else {
        res.status(401).send('<script>alert("Invalid credentials."); window.location.href="/";</script>');
    }
});

app.post("/register", async (req, res) => {
    const {username, password, isAdmin} = req.body;
    // Prevent users from registering with a busy username. Feel free to check it out (https://redis.io/commands/exists/).
    if (!(await redisClient.exists(`user:${username}`))) {
        if (password.length >= 8 && qualified(password)) {
            // Instead of storing the passwords in clear text, store the passwords hashed and salted with bcrypt.
            const hashedPassword = hashSync(password, 10);
            await redisClient.hSet(
                `user:${username}`, 
                {
                    password:hashedPassword, 
                    isAdmin:isAdmin
                }
            );
            res.send('<script>alert("Successfully registered."); window.location.href="/";</script>');
        } else {
            // Require the user to have at least 8 characters in the password.
            if (password.length < 8) {
                res.send('<script>alert("Password needs at least 8 characters."); window.location.href="/";</script>');
            }
            // Set additional requirements that the password must contain at least one special character and one number. Tip: write your own functions that determine this
            else {
                res.send('<script>alert("Password needs at least one special character and one number."); window.location.href="/";</script>');
            }
        } 
    } else {
        res.send('<script>alert("This username is already used."); window.location.href="/";</script>');
    }
});

function qualified(password) {
    return /\d/.test(password) && /[^\w\s]/.test(password);
}

app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});