const express = require('express');
const router = express.Router();
const shippingAddressController = require('../controllers/shippingAddress.controller');

router.route('/')
    .get(shippingAddressController.getShippingAddressByEmail)
    .post(shippingAddressController.createShippingAddress)

router.route('/:id')
    .put(shippingAddressController.updateShippingAddressById)


module.exports = router;