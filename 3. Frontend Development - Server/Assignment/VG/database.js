// Install and import mongoose
const mongoose = require("mongoose");

// Create a table
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    category: {type: String, required: true}
});

// Export collection
module.exports = mongoose.model("product", productSchema);

