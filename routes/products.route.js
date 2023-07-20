const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');
const uploader = require('../middleware/uploader');


// router.post("/file-upload", uploader.array("image"), productController.fileUpload)

router.route('/')
    .get(productController.getProducts)
    .post(uploader.array("image"), productController.createProduct)

router.route('/:id')
    .get(productController.getProductsById)


module.exports = router;