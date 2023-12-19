const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = 8000;

// Middleware is something that comes in between the request and the route.
// If an argument should not be used, you can tell VSCode to put a _ in front.  
app.use((_req, _res, next) => {
  // Now logging "Middleware!" at each request.
  console.log("Middleware!");
  // Next moves on to the route (or next middleware). Without next(), the application will stand still.
  next(); 
});

// Sets up the server to listen to incoming requests.
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

// Secret: A key used to generate the session id. If it leaks, a malicious user can create their own sessions however they want.
// resave: Whether session data should be saved regardless of whether no data has been modified.
// saveUnitialized: Whether the server should store a new session immediately. This actually violates the GDPR! You need the user's consent.
app.use(
  session({ secret: "myUnsafeSecret", resave: false, saveUninitialized: false })
);

// Allows us to read the data from the form.
app.use(bodyParser.urlencoded({ extended: false }));

// Allows us to serve public files.
app.use(express.static("public"));

// Adds a route to / (the root)
app.get("/", (req, res) => {
  // Adds the mySecretMessage property that can be accessed in every reqeust from the user.
  req.session.mySecretMessage = "42"; 
  res.send(`${req.session.mySecretMessage}`);
});

// Serve index.html
app.get("/form", (_req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// Modifies session if username and password match.
app.post("/login", (req, res) => {
  if (req.body.username === "kristian" && req.body.password === "123") {
    req.session.isAuthenticated = true;
    return res.send("You are now logged in!");
  }
  res.send("Invalid Credentials");
});

// A route that returns differently depending on whether you are authenticated or not.
app.get("/protected", (req, res) => {
  if (!req.session.isAuthenticated) {
    return res.send("Not authenticated!");
  }
  res.send("Authenticated!");
});

/*
1. Set up express
2. Set up middleware with a route
3. Set up express session with everything false. Show cookies in the browser.
4. Show saveUninitialized. Modify req.session
5. Set up a form in the browser.
6. Set up body parser and a login route
7. Set up a protected route.
*/