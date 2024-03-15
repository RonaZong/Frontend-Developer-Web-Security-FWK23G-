// TODO: Your task is to create a blog. In the blog you can see the blog posts of different users. All users should see in their feed the various blog posts and who has created them. The blog posts only contain text and a title.

// NOTE: npm install express, express-session, redis, connect-redis, bcrypt, jsonwebtoken, dotenv, body-parser, cookie-parser.
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

// Load environment variables from .env
dotenv.config();

// Create Express app
const app = express();

// Create HTTP server and handle websocket connections
const server = createServer(app);
const io = new Server(server);

// Set up websocket events here

// Connect to Redis
const redisClient = createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

// Configure session
app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: process.env.NODE_ENV === "production" },
    })
);

// Configure middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Implement authentication routes and JWT handling here

// Serve static files
app.use(express.static("public"));

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Requirements:
// Each user can log in with a unique username and password.
// The password is saved hashed and salted in the database.
// The page should remember who you are - if you open the page again, you should still be logged in. Within a reasonable time frame of course. It should also say up in the right corner "logged in as {username}".
// The application can be started without problems.
// The blog posts are in a database and not hardcoded.
// Each blog entry must state who wrote it.
// Each blog post must have a date and time attached to it.
// The app stores any session data in a database, not in memory.
// The application uses appropriate methods and status codes.
// There is an admin login. The admin login must have permission to remove all posts from the platform.
// New users should be able to register.
// A user can login/register via GitHub (OAuth 2.0).
// Each user can post blog posts themselves via a form.
// Each user can delete their own posts.
// Users can comment on each other's posts. In the comment field, the user must be able to use HTML to format their posts. <b>example</b> becomes example.
// The site uses several methods to secure itself against XSS and CSRF.
// In your submission, please specify some code changes and instruct how one could perform an XSS attack with the protections removed. It is enough to inject an alert().
// Users can “like” each other's posts. It must then appear in all posts who/who liked the post. If you are inside the page when someone likes your post, you get a notification, without having to refresh the page (use WebSockets for this).

