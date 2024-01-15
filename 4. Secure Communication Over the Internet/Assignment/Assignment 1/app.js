// npm install express, express-session, redis, connect-redis, bcrypt, jsonwebtoken, body-parser,
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const { compareSync, hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static("public"));
app.use(express.json());
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

const redisClient = createClient();
redisClient.connect();

const redisStore = new RedisStore({ client: redisClient, prefix: "session:", });

app.use(bodyParser.urlencoded({ extended:false }));

app.use(session({
    secret: "secretKey",
    saveUninitialized: false,
    resave: false,
    store: redisStore,

    cookie: {
        expires: 5 * 60 * 1000,
    }
}));

const users = [];
const posts = [];
const roles = ["user", "admin"];


// Middleware to check if the user has permission
// const hasPermission = (action) => {
//     return async (req, res, next) => {
//         const username = req.session.username;
//         const role = await redisClient.hGet(`user:${username}`, `role`);
//         const hasPermission = await redisClient.sIsMember(`role:${role}`, action);
//         if (hasPermission) {
//             next(); // permission granted
//         } else {
//             res.status(403).send("Access Denied"); // Permission denied
//         }
//     };
// }

// app.get("/protected", (req, res, next) => {
//     // Get payload from cookies
//     const token = req.cookies.token;

//     // Invalid token gives an error
//     try {
//         // {username: username. canViewProtected: true}
//         const payload = jwt.verify(token, "secretKey"); 
//         if (payload.canViewProtected) {
//             next();
//         } else {
//             res.status(401).send("Not permitted.");
//         }
//     } catch (err) {
//         res.status(401).json({ error: `Unauthorized` });
//     }
// });

// Home page
// app.get("/", hasPermission("read"), (req, res) => {
//     res.sendFile("blog.html");
// });

// app.post("/data", hasPermission("create", (req, res) => {
//     res.send("Data created");
// }));

// TODO: The password is saved hashed and salted in the database
app.post("/register", async(req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    if (await redisClient.exists(`user:${username}`)) {
        return res.sendFile(__dirname + "/public/index.html", { error: `This username is already taken.`});
    }
        const hashedPassword = hashSync(password, 10);
        await redisClient.hSet(`user:${username}`, {password:hashedPassword});
        res.json({ message: `User registered successfully` });
        // res.send("<script>document.getElementById('registerStatus').innerHTML = 'Registered!';</script>")

});

// TODO: Each user can log in with a unique username and password
app.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.hGet(`user:${username}`, `password`);
    if (compareSync(password, dbPassword)) {
        // If correct username and password given, send a JWT with following payload
        const token = jwt.sign(
            { username: username, canViewProtected: true },
            "secretKey",
        );
        // Web save token in a cookie
        res.cookie("token", token);
        res.status(200).json({ message: "Logged in", token});
    } else {
        res.status(401).json({error: "Invalid credentials."});
    }
});

// Get user-specified blog post
// app.get("/blog", hasPermission("read"), (req, res) => {

// });

// Create a new blog post
// app.post("/create-post", hasPermission("create"), (req, res) => {
//     const { title, text } = req.body;
//     // TODO: Each blog post must have a date and time attached to it.
//     const post = {user: req.session.username, title, text, createdAt: new Date()};
    
//     res.status(200).json({ message: `Posst created successfully`, post });
// });

// TODO: Each user can delete their own posts. 
// Delete user-specified blog post
// app.delete("/delete-post", hasPermission("delete"), (req, res) => {
//     const post = {user: req.session.username, title, text, createdAt: new Date()};
    
// })

// TODO: The page should remember who you are. If you open the page again, you should still be logged in. Within a resonable time frame of course. It should also say up in the right corner "logged in as {username}".
// TODO: The application can be started without problems.
// TODO: The blog posts are in database and not hardcoded.
// TODO: Each blog entry must state who wrote it.
// TODO: Each user can post blog posts themselves via a form.

