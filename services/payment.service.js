const Payment = require("../models/payment")

exports.postPaymentDataService = async (req) => {
    const data = req.body;
    console.log("data service:", data)
    const result = await Payment.create(data)
    // console.log("result service:", result)
    return result;
}