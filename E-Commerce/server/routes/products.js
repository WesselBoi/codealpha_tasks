const express = require('express');
const asyncHandler = require("../middlewares/asyncHandler");
const router = express.Router();
const {getAllProducts, getSingleProduct} = require("../controllers/product");

// Get all products
router.route("/").get(asyncHandler(getAllProducts))

// Get single product by ID
router.route("/:id").get(asyncHandler(getSingleProduct))

module.exports = router;