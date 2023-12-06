/*
Exercise 1: Set Up a Basic Express Server
Install Node.js and npm:
Make sure you have Node.js and npm installed on your machine.

Initialize a new Node.js project:
Open a terminal and navigate to the desired directory. Run the following commands:

    $ mkdir express-api-demo
    $ cd express-api-demo
    $ npm init -y

Sedan installera express

    $ npm install express

Create a basic Express server:
Create a file named app.js and set up a simple Express server:

*/
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
Run the server:
Execute the following command in the terminal:

    $ node app.js

Open your web browser and navigate to http://localhost:3000. 
You should see the "Hello, Express!" message.
*/

/*
Exercise 2: Create a Simple REST API
Extend the Express server:
Modify the app.js file to include routes for a basic REST API. Update the file as follows:

Test the API:
Restart your server (node app.js) and test the following routes using a tool 
like Insomnia or curl:

GET http://localhost:3000/books
GET http://localhost:3000/books/1 (or another valid book ID)
GET http://localhost:3000/books/99 (a non-existent book ID)
Make sure you understand how the server handles different requests and responds with JSON data.

*/
const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
];

/*
Excercise 3: Add POST, PUT, DELETE methods to REST API
Extend the Express server:
Modify the app.js file to include methods for POST, PUT, DELETE request aswell.

POST http://localhost:3000/books { "title": "Sagan om ringen" } (adds book to books array)
PUT http://localhost:3000/books/3 { "title": "Sagan Om Ringen" } (change book title)
DELETE http://localhost:3000/books/3 (deletes book)

*/