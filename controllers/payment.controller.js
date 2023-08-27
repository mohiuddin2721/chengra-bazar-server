const {
    postPaymentDataService,
    getAllPaymentDataService,
    getPaymentDataByEmailService,
    updatePaymentDataStatusService,
} = require("../services/payment.service");

const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.postPaymentData = async (req, res, next) => {
    try {
        const result = await postPaymentDataService(req)
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

        if (isNaN(price)) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid price value',
            });
        }
        const amount = parseInt(price * 100);
        // console.log('price:', price, "amount: ", amount)
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

exports.getAllPaymentData = async (req, res, next) => {
    try {
        const result = await getAllPaymentDataService()
        res.status(200).json({
            status: 'success',
            message: `All Payment Data getting`,
            data: result,
        })
    } catch (error) {
        res.status(403).json({
            status: 'fail',
            message: 'No Payment Data Found',
            error: error.message,
        })
    }
}

exports.getPaymentDataByEmail = async (req, res, next) => {
    try {
        // console.log(req.query)
        const result = await getPaymentDataByEmailService(req.query)
        res.status(200).json({
            status: 'success',
            message: `Payments Data Getting success`,
            data: result,
        })
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message: 'No Payment Data Found',
            error: error.message,
        })
    }
}

exports.updatePaymentDataStatus = async (req, res, next) => {
    try {
        const result = await updatePaymentDataStatusService(req)
        res.status(200).json({
            status: 'success',
            message: "successfully changed the order status",
            data:result,
        })
    } catch (error) {
       res.status(401).json({
        status:'fail',
        message:'unauthorized access',
        error : error.message,
       }) 
    }
}