const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const bodyParser = require("body-parser");
const { compareSync, hashSync } = require("bcrypt");

const app = express();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

const redisClient = createClient();
redisClient.connect();

const redisStore = new RedisStore({client: redisClient, prefix: "session:"});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    session({
        secret: "myUnsafeSecret",
        saveUninitialized: false,
        resave: false,
        store: redisStore,
    })
);

app.get("/protected", (req, res, next) => {
    if (req.session.isLoggedIn) {
      next();
    } else {
      res.status(401).send("Not permitted.");
    }
});

// app.post("/register", async (req, res) => {
//     const { username, password } = req.body;
//     await redisClient.set(`user:${username}`, password);
//     res.send("Successfully registered!");
// });

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    // HashSync accepts 2 arguments.
    // 1. The password to be hashed.
    // 2. How many rounds it should be salted. More salt = slower and safer
    const hashedPassword = hashSync(password, 10);
  
    // With this, the hashed value is stored in the database.
    await redisClient.set(`user:${username}`, hashedPassword);
    res.send("Successfully registered!");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.get(`user:${username}`);
    // CompareSync hashes the first argument and checks if it becomes the second argument.
    if (compareSync(password, dbPassword)) {
      req.session.isLoggedIn = true;
      res.redirect("/protected");
    } else {
      res.status(401).send("Invalid credentials.");
    }
});

app.use(express.static("public"));