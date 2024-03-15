import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const page = `
    <!DOCTYPE html>
    <html lan="en">
        <head>
        </head>
        <body>
            <h1>Website</h1>
            <a href="/notes">notes</a>
        </body>
    </html>
    `;
    res.send(page);
});

app.get("/notes", (req, res) => {
    const page = `
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            <h1 class="header">Notes</h1>
            <div id="notes"></div>
            <form action="/new_note" method="POST">
                <input type="text" name="content"/>
                </br>
                <input type="submit" value="save"/>
            </form>
            <a href="/">go back</a>
            <script src="frontend.js"></script>
        </body>
    </html>
    `;
    res.send(page);
});

const notes = [{ content: "hi1" }, { content: "hi2" }];

app.get("/data.json", (req, res) => {
    res.json(notes);
});

app.post("/new_note", (req, res) => {
    notes.push(req.body);
    res.redirect("/notes");
});

app.listen(3000, () => {
    console.log("Started application.");
});