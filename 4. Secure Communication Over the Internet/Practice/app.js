// Exercises:
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(
    session({ secret: "myUnsafeSecret", resave: false, saveUninitialized: false })
);

// Allows us to serve public files.
app.use(express.static(__dirname));

// Allows us to read the data from the form.
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});

/* Cookies and Storage */
// 1.1 Write a script that stores your name and hometown in localStorage.
// localStorage.setItem("username", "Rona");
// localStorage.setItem("hometown", "Shanghai");

app.use((_req, _res, next) => {
    console.log("Middleware!");
    next(); 
});

// 1.2a Build a website that shows how many times the user has visited your website.
app.get("/", (req, res) => {
    if (req.session.views) {
        req.session.views++;
        // res.setHeader("Content-Type", "text/html");
        document.getElementById("visited").innerHTML = req.session.views;
        document.getElementById("expire").innerHTML = req.session.cookie.maxAge / 1000;
    } else {
        req.session.views = 1;
        res.end("Welcome to the session");
    }
});

// 1.2b Add a text form where a user can type something. Below that, there should be a heading "Past Entries" that shows what the user has entered in the field before.
app.post("/user", (req, res) => {
    // 1.2c Make sure that "Past Entries" do not disappear if you reload the page.
    document.getElementById("pastEntry").innerHTML = req.body.text;
    // 1.2d Add a timestamp to each entry.
    document.getElementById("timestamp").innerHTML = new Date();
});


// 1.2e Add a button that resets the number of visits to zero.
document.getElementById("resetBt").click = function() {
    res.session.clear();
}

// 1.3a Make a website that contains a button. If you press the button, the browser must store a cookie with the name clicks. clicks increases by 1 for each time the user presses the button.

// 1.3b Add a header to the page. This should say "Welcome back, you were here X seconds ago!"

// 1.3c Add a button "Remove all cookies" which removes all cookies on your page.
// let removeCookies = document.getElementById("removeCookies");
// removeCookies.onclick = function() {
    //Expiration
    // document.cookie = `name=Kristian; expires=${new Date(2024, 0, 2).toUTCString()}`
    // document.cookie = `name=clicks; expires=${new Date(2020, 0, 2).toUTCString()}` 
// }
// 1.4 Build a website that prints all cookies and their values in a table with two columns. For example:
// Name                Value
// lastVisited         2022-01-01T23:00:00.000Z
// favoriteTheme       dark mode
// itemsInCart         2

// Sessions
// 2 In this exercise, you will build a page for an online bookstore. Below are some features you can implement in any order.
// Users can see different books on the home page that are available in the library.
// When you click on a book, you get some information about it. You can start with just a few books and hardcoded values. If you want, you can put these in a database.
// A user gets "Recently Viewed" on the home page with a list of books they have just looked at.
// A user can add books to the cart. Which books are in the shopping cart are saved in the session.
// A user has a login where session data is saved more permanently. The user can now close the browser, come back and still have the goods in the basket.
// After a certain amount of inactivity, the session is destroyed and the user is logged out.

// Feel free to refactor the code as you learn better ways to solve the problems during the course.



