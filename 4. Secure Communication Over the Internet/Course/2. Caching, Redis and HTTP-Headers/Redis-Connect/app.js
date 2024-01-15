// npm install connect-redis, redis, nodemon, cookie-parser,
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const cookieParser = require("cookie-parser");

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

app.use(cookieParser());

app.use(session({
    secret: "myUnsafeSecret",
    saveUninitialized: false,
    resave: false,
    store: redisStore, // All session data should store in redis store
}));

app.get("/", (req, res) => {
    if (!req.session.pageViews) {
        req.session.pageViews = 0;
    }
    req.session.pageViews++;
    console.log(req.cookies);
    res.send(`You have visited the page ${req.session.pageViews} times!`);
});

app.get("/username", async(_req, res) => {
    const username = await redisClient.get("username");
    res.send(username);
});

app.post("/username", async(_req, res) => {
    await redisClient.set("username", "rona");
    res.send("Username updated");
});

app.delete("/session", (req, res) => {
    req.session.destroy();
    res.send("session destroyed");
});