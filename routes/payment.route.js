const express = require('express');
const router = express.Router();
const paymentController = require("../controllers/payment.controller");
const verifyToken = require('../middleware/verifyToken');

router.post('/create-payment-intent', verifyToken, paymentController.postPayment)

module.exports = router;

