import express from "express";
// npm install body-parser
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

let idCount = 0;
const books = [
    { id: ++idCount, title: "Book 1" },
    { id: ++idCount, title: "Book 2" },
];

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    // res.json(books[parseInt(req.params.id)-1]);

    const id = parseInt(req.params.id);
    for (let book of books) {
        if (book.id === id) {
            res.json(book);
        }
    }
    res.status(404).end();

    // if (id) {
    //     const book = books.find((book) => book.id === id);
    //     if (book) {
    //         res.json(book);
    //     } else {
    //         res.status(404).end(); // Not Found
    //     }
    // } else {
    //     res.status(400).end(); // Bad Request
    // }
});

// JSON type 
// {
// 	"title": "Sagan om ringen"
// }
app.post("/books", (req, res) => {
    const book = req.body;
    if (book.title === undefined) {
        res.status(404).end();
    } else {
        book.id = ++idCount;
        books.push(book);
    }

    res.status(201).end(`/books/${book.id}`);
});

// {
// 	"title": "Sagan Om Ringen"
// }
app.put("/books/:id", (req, res) => {
    const id = parseInt.params.id;
    const book = req.body;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i] = {...books[i], ...book};
            res.status(200).end();
        }
    }
    res.status(404).end();
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const newBooks = [];
    let found = false;
    books.forEach((book) => {
        if (book.id !== id) {
            newBooks.push(book);
        } else {
            found = true;
        }
    });

    books = newBooks;
    if (found) {
        res.status(200).end();
    } else {
        res.status(404).end();
    }

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});