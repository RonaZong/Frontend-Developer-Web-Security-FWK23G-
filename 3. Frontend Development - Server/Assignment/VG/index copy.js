// Install and import Express
const express = require("express");

// Install and import middleware
const bodyParser = require("body-parser");

// Install and import mongoose
const mongoose = require("mongoose");

// Import Database
const Products = require("./database.js");
mongoose.connect("mongodb://127.0.0.1:27017/products");
const db = mongoose.connection;
db.on("err", console.error);
db.once("open", () => console.log("MongoDB connected successfully!"));

// Install npm i -g nodemon

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port =  3000;

const message = {message: "Welcome to DressStore application."};

// Create an array to store the products
let idCount = 0;
let products = [
    {id: ++idCount, name: "Royal Gala", description: "Apple from Argentina", price: 8, quantity: 2000, category: "Fruit"},
    {id: ++idCount, name: "Banana Eco", description: "Banana from Ecuador", price: 6, quantity: 5000, category: "Fruit"},
    {id: ++idCount, name: "Avocado Mogen", description: "Avocado from Chile", price: 30, quantity: 800, category: "Fruit"},
]

// Retrieve a message
app.get("/", (req, res) => {
    res.json(message);
});

// Retrieve a list of products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Retrieve a specific profuct by ID
app.get("/api/products/:id", (req, res) => {
    try {
        const productID = parseInt(req.params.id);
        const product = products.find(p => p.id === productID);

        if (!product) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            res.json(product);
        }
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Create a new product
app.post("/api/products", (req, res) => {
    try {
        const newProduct = req.body;
        newProduct.id = ++idCount;
        products.push(newProduct);
        res.status(201);
        res.json({
            "message": "Product added!",
            "body": newProduct
        });
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Update a product by ID
app.put("/api/products/:id", (req, res) => {
    try {
        const productID = parseInt(req.params.id);
        const updatedProduct = req.body;

        // Find the product and update its properties
        const productIndex = products.findIndex(p => p.id === productID);

        if (productIndex === -1) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            products[productIndex] = {
                ...products[productIndex],
                ...updatedProduct
            };
            res.json(products[productIndex]);
        }
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Delete a product by ID
app.delete("/api/products/:id", (req, res) => {
    try {
        const productID = parseInt(req.params.id);

        // Find the prouct and remove it from the array
        const productIndex = products.findIndex(p => p.id === productID);

        if (productIndex === -1) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            const deletedProduct = products.splice(productIndex, 1);
            res.json(deletedProduct[0]);
        } 
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Delete a list of products
app.delete("/api/products", (req, res) => {
    try {

        if (productIndex === -1) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            const deletedProduct = products.splice(productIndex, 1);
            res.json(deletedProduct[0]);
        } 
    } catch (err) {
        if (err.response) {
            const {status} = err.response;
            res.status(status).json({
                err: `API request failed with status ${status}`
            });
        } else if (err.request) {
            res.status(500).json({
                err: `No response received from the API`
            });
        } else {
            res.status(500).json({
                err: `An error occurred while fetching data from the API`
            });
        }
    }
});

// Retrieve a product whose name contains "kw" 


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

