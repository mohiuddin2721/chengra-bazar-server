const express = require('express');
const router = express.Router();
const paymentController = require("../controllers/payment.controller");
const verifyToken = require('../middleware/verifyToken');


router.route('/')
    .get(verifyToken, paymentController.getAllPaymentData)
    .post(verifyToken, paymentController.postPaymentData)

router.patch("/:id",verifyToken, paymentController.updatePaymentDataStatus)
router.get('/email', verifyToken, paymentController.getPaymentDataByEmail)
router.post('/create-payment-intent', verifyToken, paymentController.postPayment)

module.exports = router;

