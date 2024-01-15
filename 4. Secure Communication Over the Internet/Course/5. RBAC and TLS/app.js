// RBAC (Role-Based Access Control) in Node.js
const express = require("express");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis").default;
const bodyParser = require("body-parser");
//npm install dotenv
const dotenv = require("dotenv");

const app = express();
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

const redisClient = redis.createClient();
redisClient.connect();

const redisStore = new RedisStore({
    client: redisClient,
    prefix: "session",
})

dotenv.config();

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        store: redisStore,
    })
);

app.use(bodyParser.json());

// Middleware
function hasPermission(action) {
    return async (req, res, next) => {
        const username = req.session.username;
        const role = await redisClient.hGet(`user:${username}`, `role`);
        const hasPermission = await redisClient.sIsMember(`role:${role}`, action);
        if (hasPermission) {
            next(); // permission granted
        } else {
            res.status(403).send("Access Denied"); // Permission denied
        }
    };
}

app.post("/login", (req, res) => {
    const { username } = req.body;
    // Do password authentication here
    req.session,username = username;
    res.send("Login successful");
});

// Routes with role-based access control
app.get("/data", hasPermission("read"), (req, res) => {
    res.send("Data read");
});

app.post("/data", hasPermission("create", (req, res) => {
    res.send("Data created");
}));
