const express = require("express");
const session = require("express-session");
const {createClient} = require("redis");
const RedisStore = require("connect-redis").default;
const bodyParser = require("body-parser");
const {compareSync, hashSync} = require("bcrypt");

const app = express();
const redisClient = createClient();
redisClient.connect();

const redisStore = new RedisStore({client: redisClient, prefix: "session:"});

app.use(bodyParser.urlencoded({extended: false}));
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
  
    //HashSync tar emot 2 argument.
    // 1. Lösenordet som ska hashas.
    // 2. Hur många omgångar det ska saltas. Mer salt = långsammare och säkrare
    const hashedPassword = hashSync(password, 10);
  
    //Med detta så lagras det hashade värdet i databasen.
    await redisClient.set(`user:${username}`, hashedPassword);
    res.send("Successfully registered!");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.get(`user:${username}`);
    //CompareSync hashar det första argumentet och kollar om det blir det andra argumentet.
    if (compareSync(password, dbPassword)) {
      req.session.isLoggedIn = true;
      res.redirect("/protected");
    } else {
      res.status(401).send("Invalid credentials.");
    }
});

app.use(express.static("public"));

app.listen(8000);