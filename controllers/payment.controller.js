const stripe = require("stripe")(process.env.STRIPE_KEY);


exports.postPayment = async (req, res, next) => {
    try {
        const { price } = req.body;
        const amount = price * 100;
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