// Install and import Express
const express = require("express");

// Install and import middleware
const bodyParser = require("body-parser");

// Install and import mongoose
const mongoose = require("mongoose");

// Import Database
const Product = require("./database.js");

// Install npm i nodemon dotenv
// in thapackage.json file
// "scripts": {
//     "start": "nodemon index.js"
// },
// type npm start in terminal

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/products");
const db = mongoose.connection;
db.on("error", (err) => {console.log(err)});
db.once("connected", () => console.log("MongoDB connected successfully!"));

// Insert documents
/*
[
    {"name": "Royal Gala", "description": "Apple from Argentina", "price": 8, "quantity": 2000, "category": "Fruit"},
    {"name": "Banana Eco", "description": "Banana from Ecuador", "price": 6, "quantity": 5000, "category": "Fruit"},
    {"name": "Avocado Mogen", "description": "Avocado from Chile", "price": 30, "quantity": 800, "category": "Fruit"}
]
*/

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port =  3000;

// Retrieve a list of products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        if(!products) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            res.status(200).json(products);
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

// Retrieve a specific profuct by ID
app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
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
app.post("/api/products", async (req, res) => {
    try {
        if (!(req.body.hasOwnProperty("name") 
        && req.body.hasOwnProperty("description") 
        && req.body.hasOwnProperty("price") 
        && req.body.hasOwnProperty("quantity") 
        && req.body.hasOwnProperty("category"))) {
            res.status(400).json({
                err: `Bad request`
            });
        }
        else {
            const product = new Product({
                ...req.body
            });
            const newProduct = await product.save();

            res.status(201).json({
                "message": "Product created!",
                "body": newProduct,
            });
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

// Update a product by ID
app.put("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const updatedProduct = req.body;
        if (!product) {
            res.status(404).json({
                err: `Product not found`
            });
        } else if (!(updatedProduct.hasOwnProperty("name") 
        || updatedProduct.hasOwnProperty("description")
        || updatedProduct.hasOwnProperty("price")
        || updatedProduct.hasOwnProperty("quantity")
        || updatedProduct.hasOwnProperty("category"))) {
            res.status(400).json({
                err: `Bad request`
            });
        } else {
            if (updatedProduct.name) {
                product.name = updatedProduct.name;
            }
            if (updatedProduct.description) {
                product.description = updatedProduct.description;
            }
            if (updatedProduct.price) {
                product.price = updatedProduct.price;
            }
            if (updatedProduct.quantity) {
                product.quantity = updatedProduct.quantity;
            }
            if (updatedProduct.category) {
                product.category = updatedProduct.category;
            }
            const newProduct = await product.save();
            res.status(200).json(newProduct);
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
app.delete("/api/products/:id", async (req, res) => {
    try {
        // Find the product and remove it from the array
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                err: `Product not found`
            });
        } else {
            await Product.deleteOne({_id: product._id});
            res.status(200).json(`Document with ${product.name} has been deleted!`);
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
app.delete("/api/products", async (req, res) => {
    try {        
        const query = await Product.find();
        for (let q of query) {
            await Product.findOneAndDelete({_id: q._id})
        }
        res.status(200).json(`All documents have been deleted!`);
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

// Retrieve a product whose name contains "al" 
app.get("/api/product", async (req, res) => {
    try {
        const searchParam = req.query; // "name" = "al"
        if (searchParam && searchParam.name) { // true
            const keyword = searchParam.name;
            const products = await Product.find();
            let filteredProduct;
            for (let p of products) {
                if (p.name.includes(keyword)) {
                    filteredProduct = await Product.findOne({name: p.name});
                } 
            }
            if (!filteredProduct) {
                res.status(404).json({
                    err: `Product not found`
               });
            } else {
                res.status(200).json(filteredProduct);
            }
        } else {
            res.status(400).json({
                err: `Bad request`
            });
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


// Install ejs
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
    const products = await Product.find();
    res.render("product", {products: products});
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

