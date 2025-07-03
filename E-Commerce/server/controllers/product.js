const mongoose = require("mongoose");
const Product = require("../models/product");
const asyncHandler = require("../middlewares/asyncHandler");

async function getAllProducts(req, res) {
  const products = await Product.find({});
  res.json(products);
}


async function getSingleProduct(req,res){
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404)
        throw new Error('Resource not found');
    }
}

module.exports = {
  getAllProducts,
  getSingleProduct
};