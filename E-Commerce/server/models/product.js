const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name : {
        type: String,
        required: true,
    },
    rating : {
        type: Number,
        required: true,
    },
    comment : {
        type: String,
        required: true,
    },
} , {
    timestamps: true,
});


const productSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    desc : {
        type: String,
        required: true,
    },
    brand : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    countinstock : {
        type: Number,
        required: true,
    },
    reviews : [reviewSchema],  
    rating : {
        type: Number,
        required: true,
        default: 0,
    },
    numreviews : {
        type: Number,
        required: true,
        default: 0,
    }
    
} , {
    timestamps: true,
});
const Product = mongoose.model("Product" , productSchema);

module.exports = Product;