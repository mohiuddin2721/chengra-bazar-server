const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)


module.exports = router;