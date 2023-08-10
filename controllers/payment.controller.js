const { postPaymentDataService } = require("../services/payment.service");

const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.postPaymentData = async (req, res, next) => {
    try {
        const cart = req.body.cart;
        const result = await postPaymentDataService(cart)
        // console.log('controller', result)
        res.status(200).json({
            status: 'success',
            message: 'Successfully payment data inserted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Payment data is not inserted',
            error: error.message,
        })
    }


}

exports.postPayment = async (req, res, next) => {
    try {
        const { price } = req.body;
        const amount = parseInt(price * 100);
        console.log('price:', price, "amount: ", amount)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"]
        })
        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error,
        })
    }
}