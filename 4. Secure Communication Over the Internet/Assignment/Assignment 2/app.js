// TODO: Create a blog. In the blog you can see the blog posts of different users. All users should see in their feed the various blog posts and who has created them. The blog posts only contain text and a title.

// NOTE: npm install express, express-session, http, socket.io, redis, connect-redis, bcrypt, jsonwebtoken, dotenv, body-parser, cookie-parser, helmet.
const express = require("express");
const session = require("express-session");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
const { compareSync, hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);

// Connect to Redis
const redisClient = createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});
redisClient.connect();

// Initialize session store
const redisStore = new RedisStore({ client: redisClient, prefix: "session:", });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// TODO: The site uses several methods to secure itself against XSS and CSRF.
// Set the CSP header
app.use(helmet,helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-scripts.com'],
        styleSrc: ["'self'"],
    },
}));


// TODO: The app stores any session data in a database, not in memeory.
// NOTE: Session setup
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        store: redisStore,
        cookie: {
            secure: false, 
            httpOnly: true, 
            // Mitigate CSRF attacks
            sameSite: "strict"
        }
}));

// Set up ejs for templating
app.set("view engine", "ejs");

// Serve static engine
app.use(express.static("public"));

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// TODO: The application uses appropriate methods and status codes.
const isAuthenticated = (req, res, next) => {
    // Get payload from cookies
    const token = req.cookies.token;

    // Invalid token gives an error
    try {
        const payload = jwt.verify(token, process.env.SESSION_SECRET);
        if (payload.exp < Date.now() / 1000) {
            // Token has expired
            res.status(401).send({ error: "Unquthorized - Token Expired." });
        }
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

// TODO: There is an admin login. The admin login must have permission to remove all posts from the platform.
function isAdmin(req, res, next) {
    const role = req.user.role;
    if (role === "admin") {
        next();
    } else {
        res.status(403).send("Access Denied. Admin permission required.");
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}



// TODO: The application can be started without problems.
// NOTE: Serve the index.html file for the home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// TODO: Each user can log in with a unique username and password
app.post("/login", async (req, res) => {
    // Sanitized
    const { username, password } = xss(req.body);
    
    try {
        const dbPassword = await redisClient.hGet(`user:${username}`, `password`);
        if (compareSync(password, dbPassword)) {
            // TODO: The page should remember who you are. If you open the page again, you should still be logged in. Within a resonable time frame of course. It should also say up in the right corner "logged in as {username}".
            // If correct username and password given, send a JWT with following payload
            const token = jwt.sign(
                { username: username, isLoggedIn: true, exp: Math.floor(Date.now() / 1000) + (5 * 60) },
                process.env.SESSION_SECRET,
            );
    
            // Web save token in a cookie
            res.cookie("token", token);

            const role = await redisClient.hGet(`user:${username}`, `role`);
            if (role === "admin" ) {
                res.redirect("/admin");
            } else {
                res.redirect("/blog");
            }
        } else {
            throw new Error("Invalid credentials.");
        }
    } catch (err) {
        console.error("Login Error:", err);
        res.status(401).send({ error: "Invalid credentials." });
    }
});

// TODO: New users should be able to register.
app.post("/register", async (req, res) => {
    // Sanitized
    const { username, password } = xss(req.body);

    const role = username.toLowerCase() === "admin" ? "admin" : "user";

    try {
        // Check if the username is already taken
        if (await redisClient.exists(`user:${username}`)) {
            throw new Error("This username is already taken.")
        } 
        
        // TODO: The password is saved hashed and salted in the database
        const hashedPassword = hashSync(password, 10);
        await redisClient.hSet(`user:${username}`, {password:hashedPassword, role:"user"});
        // res.json({ message: `User registered successfully` });
        res.redirect("/blog");
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(400).send({ error: err.message });
    }
});

// NOTE: Retrieve and display all blog posts
app.get("/blog", isAuthenticated, async (req, res) => {
    try {
        const blogPostIds = await redisClient.sMembers("blogposts");
        const blogPosts = []
        for (let i=0; i < blogPostIds.length; i++) {
            const post = await redisClient.hGetAll(`blogpost:${blogPostIds[i]}`);
            blogPosts.push(post)
        }
        
        console.log("Retrieved Blog Posts:", blogPosts);

        // TODO: Users can "like" each other's posts. It must then appear in all posts who / who liked theposts. If you are inside the page when someone likes your post, you get a notification, without having to refresh the page (use WebSockets for this).
        // Notify users when someone likes their post
        io.on("connection", (socket) => {
            socket.on("like", (postId, username) => {
                io.emit("likeNotification", { postId, username });
            });
        });

        // TODO: The site uses several methods to secure itself against XSS.
        const sanitizedBlogPosts = blogPosts.map((post) => ({
            ...post,
            text: xss(post.text),
        }));
        
        res.render("blog", { user: req.user, blogPosts: sanitizedBlogPosts, });
    } catch (err) {
        console.error(`Error fetching blog posts:`, err);
        res.status(500).send(`Internal Server Error`);
    }
})

app.get("/admin", isAdmin, async (req, res) => {
    try {
        // Retrieve and display all blog posts (similar to the /blog route)
        const blogPostIds = await redisClient.sMembers("blogposts");
        const blogPosts = await Promise.all(blogPostIds.map(async (postId) => {
            return await redisClient.hGetAll(`blogpost:${postId}`);
        }));

        // Render admin dashboard with blog posts
        res.render("admin", { user: req.user, blogPosts });
    } catch (err) {
        console.error(`Error fetching blog posts for admin dashboard:`, err);
        res.status(500).send(`Internal Server Error`);
    }
})

app.post("/blog/like/:postId", isAuthenticated, async (req, res) => {
    const { postId } = req.params;
    const username = req.user.username;

    // Check if the user has already liked this post
    let existingLikes = await redisClient.zScore("likedBy:" + postId, username);
    
    if (!existingLikes) {
        // If not, add them to the set of people who have liked it
        await redisClient.sAdd("likedBy:" + postId, username);
        // And increment the like count by 1
        await redisClient.incr("likeCount:" + postId);
        // Emit a "like" event with the post ID and the person's name
        io.emit("likeNotification", { postId, username });
        
        res.json({ message: "Post liked successfully" });
    } else {
        return res.status(409).json({ message: `You have already liked this post.` })
    }
})

// TODO: Each user can post blog posts themselves via a form.
// NOTE: Create a new blog post
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
            id: postId,
            title: escapeHTML(title), 
            text: escapeHTML(text),
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
// NOTE: Delete user-specified blog post
app.post("/blog/delete/:postId", isAuthenticated, async (req, res) => {
    const { postId } = req.params;
    const author = req.user.username;
    const postAuthor = await redisClient.hGet(`blogpost:${postId}`, "author");
    console.log(postId);

    if (postAuthor === author) {
        await redisClient.sRem("blogposts", postId);
        await redisClient.del(`blogpost:${postId}`);
        // res.json({ message: "Blog post deleted successfully" });
        res.redirect("/blog");
    } else {
        res.status(403).send("Permission denied. You can only delete your own posts");
    }    
})

// TODO: There is an admin login. The admin login must have permission to remove all posts from the platform.
// Admin action to delete all blog posts
app.post("/admin/delete-all-posts", isAdmin, async (req, res) => {
    try {
        // Retrieve all blog post IDs
        const blogPostIds = await redisClient.sMembers("blogposts");

        // Delete each blog post
        await Promise.all(blogPostIds.map(async (postId) => {
            await redisClient.del(`blogpost:${postId}`);
        }));

        // Clear the set of blog posts
        await redisClient.del("blogposts");

        // Optionally, you may want to reset the blog post count
        await redisClient.del("blogpost:count");

        // Send a success message
        res.json({ message: "All blog posts deleted by admin" });
    } catch (err) {
        console.error(`Error deleting all blog posts:`, err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// TODO: A user can login/register via GitHub (OAuth 2.0).
// GET an access code from GitHub
// Redirect requests to Github where user can then log in.
app.get("/auth/github", (_req, res) => {
    // Client ID is in GitHub settings.
    const clientId = "f9f9e81feaa820fdd507";
    // const redirectUri = "http://localhost:8000/auth/github/callback";
    // const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
    res.redirect(authUrl);
});

// NOTE: Here we come with a code that can be used to exchange for a token.
app.get("/auth/github/callback", async (req, res) => {
    const clientId = "f9f9e81feaa820fdd507";
    const clientSecret = "82339d628a7852be2a714d9bbfa92f5f81740b93";
    const code = req.query.code;

    try {
        // Exchange code for an access token
        const response = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: code
            }),
            // params: {},
            // We will have our token in JSON-format
            headers: {
                Accept: "application/json",
            },
        })
        
        const jsonResponse = await response.json();
        req.session.username = await getUserInfoFromGitHub(jsonResponse.access_token);
        // Set a jwt
        const token = jwt.sign(
            { username: req.session.username, isLoggedIn: true, exp: Math.floor(Date.now() / 1000) + (5 * 60) },
            process.env.SESSION_SECRET,
        );

        // Web save token in a cookie
        res.cookie("token", token);

        // Redirect
        // res.redirect("/blog");
    } catch (err) {
        console.error("GitHub OAuth error: ", err);
        res.status(500).send("Internal Server Error");
    }
});

// NOTE: Get user information using the access token
const getUserInfoFromGitHub = async (access_token) => {
    const response = await fetch("http://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return await response.json();
};

// NOTE: Get user information with token
app.get("/user", async (req, res) => {
    if (!req.session.access_token) {
        res.status(403).send("Access Denied.");
    }
    res.send(await response.json());
});

// TODO: Users can comment on each other's posts. In the comment field, the user must be able to use HTML to format their posts. <b>example</b> becomes example.


app.get("/logout", (req, res) => {
    // const username = req.user.username;
    // console.log(`User ${username} has loged out.`);

    res.clearCookie("token");
    // req.session.destroy();
    res.redirect("/");
})