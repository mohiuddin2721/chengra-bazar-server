const express = require('express');
const router = express.Router();
const addCartsController = require('../controllers/addCarts.controller');

router.route('/')
    .get(addCartsController.getAddCarts)
    .post(addCartsController.createAddCart)

// router.route('/:id')
//     .get(addCartsController.getProductsById)


module.exports = router;