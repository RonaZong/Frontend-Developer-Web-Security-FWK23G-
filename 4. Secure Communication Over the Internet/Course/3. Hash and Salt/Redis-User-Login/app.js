// npm install connect-redis, redis, nodemon, cookie-parser,
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
// User login
const bodyParser = require("body-parser");

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

// Create a redis-client
// With client we can interact with Redis
const redisClient = createClient();
redisClient.connect();

// Redisstore configurate redis to use with express-session
const redisStore = new RedisStore({client: redisClient, prefix: "session:",});

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: "myUnsafeSecret",
    saveUninitialized: false,
    resave: false,
    store: redisStore, // All session data should store in redis store
}));

// app.get("/", (req, res) => {
//     if (!req.session.pageViews) {
//         req.session.pageViews = 0;
//     }
//     req.session.pageViews++;
//     console.log(req.cookies);
//     res.send(`You have visited the page ${req.session.pageViews} times!`);
// });

app.get("/protected", (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.status(401).send("Not permitted.");
    }
});

// Hard coded passward
// app.post("/login", (req, res) => {
//     const {username, password} = req.body;
//     if (username === "Rona" && password === "123") {
//         req.session.isLoggedIn = true;
//         res.redirect("/protected");
//     } else {
//         res.send("Invalid credentials");
//     }
// });

// Password from database
app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const dbPassword = await redisClient.get(`user:${username}`);
    if (password === dbPassword) {
        req.session.isLoggedIn = true;
        res.redirect("/protected");
    } else {
        res.status(401).send("Invalid Credentials.");
    }
});

app.use(express.static("public"));
