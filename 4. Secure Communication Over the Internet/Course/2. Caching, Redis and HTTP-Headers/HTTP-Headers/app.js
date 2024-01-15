// npm install express, express-session, redis, connect-redis, cookie-parser, helmet
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const cookieParser = require("cookie-parser");
// HTTP-Header, npm install helmet
const helmet = require("helmet");

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

const redisClient = createClient();
redisClient.connect();

const redisStore = new RedisStore({
    client: redisClient,
    prefix: "session:",
});

app.use(cookieParser());

app.use(helmet()); // Helmet adds recommended headers

app.use(
    session({
        secret: "myUnsafeSecret",
        saveUninitialized: false,
        resave: false,
        store: redisStore,
    })
);

app.get("/", (req, res) => {
    if (!req.session.pageViews) {
        req.session.pageViews = 0;
    }
    req.session.pageViews++;
    console.log(req.headers);
    res.send(`You have visited the page ${req.session.pageViews} times!`);

})

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
1. Check some headers in / both in postman and the browser
2. Put some random headers that confuse.
3. Show external scripts
4. Show the iframe
5. Display the helmet
6. What vulnerabilities can headers protect against? Which ones don't?
 */