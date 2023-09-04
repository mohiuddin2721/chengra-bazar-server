const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
// const uploader = require('../middleware/uploader');

router.route('/')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory)
    // .post(uploader.single("image"), categoryController.createCategory)


module.exports = router;