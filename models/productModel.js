const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name Is Required"]
    },
    price: {
        type: Number,
        required: [true, "Price Of The Product Is Required"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        required: [true, "Rating Must Be Provided"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["Apple", "Samsang", "Dell", "MI"],
            message: `{values} is not seleted`
        },
        required: [true, "Company Name Is Required"]
    }
});


module.exports = mongoose.model('Product', ProductSchema)