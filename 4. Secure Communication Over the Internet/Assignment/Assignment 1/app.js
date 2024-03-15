// npm install express, express-session, redis, connect-redis, bcrypt, jsonwebtoken, dotenv, body-parser, cookie-parser, ejs.
const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const { compareSync, hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const redisClient = createClient();
redisClient.connect();

const redisStore = new RedisStore({ client: redisClient, prefix: "session:", });

dotenv.config();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Session setup
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        store: redisStore,

        // TODO: The page should remember who you are. If you open the page again, you should still be logged in. Within a resonable time frame of course. It should also say up in the right corner "logged in as {username}".
        cookie: {
            secure: false,
            expires: 5 * 60 * 1000,
        }
    }));

const isAuthenticated = (req, res, next) => {
    // Get payload from cookies
    const token = req.cookies.token;

    // Invalid token gives an error
    try {
        const payload = jwt.verify(token, process.env.SESSION_SECRET);
        if (payload.isLoggedIn) {
            req.user = payload;
            // req.session.username = payload.username;
            next();
        } else {
            res.redirect("/");
        }
    } catch (err) {
        return res.status(401).send({ error: "Unauthorized" });
    }
};

// TODO: The application can be started without problems.
// Serve the index.html file for the home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// TODO: Each user can log in with a unique username and password
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const dbPassword = await redisClient.hGet(`user:${username}`, `password`);

    if (compareSync(password, dbPassword)) {
        // If correct username and password given, send a JWT with following payload
        const token = jwt.sign(
            { username: username, isLoggedIn: true },
            process.env.SESSION_SECRET,
        );

        // Web save token in a cookie
        res.cookie("token", token);
        res.redirect("/blog");
    } else {
        res.status(401).send({ error: "Invalid credentials." });
    }
});

// TODO: The password is saved hashed and salted in the database
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    if (!await redisClient.exists(`user:${username}`)) {
        const hashedPassword = hashSync(password, 10);
        await redisClient.hSet(`user:${username}`, { password: hashedPassword });
        res.redirect("/blog");
    } else {
        res.redirect("/");
    }
});

// Retrieve and display all blog posts
app.get("/blog", isAuthenticated, async (req, res) => {
    try {
        const blogPostIds = await redisClient.sMembers("blogposts");
        const blogPosts = []
        for (let i=0; i < blogPostIds.length; i++) {
            const post = await redisClient.hGetAll(`blogpost:${blogPostIds[i]}`);
            blogPosts.push(post)
        }
        
        // postIds.forEach((postId) => {
        //     const post = redisClient.hGetAll(`blogpost:${postId}`);
        //     posts.push(post);
        // });
        
        // Promises settle arrays
        console.log("Retrieved Blog Posts:", blogPosts);

        res.render("blog", { user: req.user, blogPosts });
    } catch (err) {
        console.err(`Error fetching blog posts:`, err);
        res.status(500).send(`Internal Server Error`);
    }
});

// TODO: Each user can post blog posts themselves via a form.
// Create a new blog post
app.post("/blog/create", isAuthenticated, async (req, res) => {
    const { title, text } = req.body;
    const author = req.user.username;
    // TODO: Each blog post must have a date and time attached to it.
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");

    // TODO: The blog posts are in database and not hardcoded.
    // Create a new post
    const postId = await redisClient.incr("blogpost:count");
    await redisClient.hSet(
        // TODO: Each blog entry must state who wrote it.
        `blogpost:${postId}`,
        {
            title,
            text,
            author,
            date,
        }
    );

    // Add post ID to the set of all blog posts
    await redisClient.sAdd("blogposts", `${postId}`);

    // Redirect to the blog page after creating a post
    res.redirect("/blog");
});

// TODO: Each user can delete their own posts. 
// Delete user-specified blog post
app.delete("/blog/delete/:postId", isAuthenticated, async (req, res) => {
    const { postId } = req.params;
    const author = req.user.username;
    const postAuthor = await redisClient.hGet(`blogpost:${postId}`, "author");

    if (postAuthor === author) {
        await redisClient.sRem("blogposts", postId);
        await redisClient.del(`blogposts:${postId}`);
        res.json({ message: "Blog post deleted successfully" });
    } else {
        res.status(403).send("Permission denied. You can only delete your own posts");
    }
})

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    req.session.destroy();
    res.redirect("/");
})