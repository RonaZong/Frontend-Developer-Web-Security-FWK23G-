// npm install connect-redis, redis, nodemon, cookie-parser,
const express = require("express");
const session = require("express-session");
const {createClient} = require("redis");
const RedisStore = require("connect-redis").default;
const cookieParser = require("cookie-parser");

// HTTP-Header, npm install helmet
const helmet = require("helmet");

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

app.use(helmet()); // Helmet adds recommended headers

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

// http-header
app.get("/json", (_req, res) => {
    res.json({msg: "This is a JSON response!"});
}); // We get "Content-type": "application/json"

app.get("/json_weird", (_req, res) => {
    res.set("Content-Type", "application/zip");
    res.json({ msg: "This is a JSON response!" });
});

app.get("/script", (req, res) => {
    res.set("Content-Security-Policy", "script-src 'self'");
    res.send(
        "<script src=https://cdn.jsdelivr.net/gh/Moksh45/host-xss.rocks/index.js></script>"
    );
});

app.get("/iframe", (_req, res) => {
    /* Clickjacking via en iframe */
    res.send(
      `<head>
      <style>
        #target_website {
          position:relative;
          width:128px;
          height:128px;
          opacity:0.00001;
          z-index:2;
          }
        #decoy_website {
          position:absolute;
          width:300px;
          height:400px;
          z-index:1;
          }
      </style>
    </head>
    <body>
      <div id="decoy_website">
      ...decoy web content here...
      </div>
      <iframe width="100%" height="1000px" id="victim_website" src="https://example.com" sandbox="allow-forms allow-scripts"></iframe>
    </body>`
    );
});

/*
1. Kolla på lite headers i / både i postman och webbläsaren
2. Sätt lite random headers som förvirrar.
3. Visa externa script
4. Visa iframe
5. Visa helmet
6. Vilka sårbarheter kan headers skydda mot? Vilka inte?
 */
  

