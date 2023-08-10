const Payment = require("../models/payment")

exports.postPaymentDataService = async (data) => {
    console.log("data service:", data)
    const result = await Payment.insertMany(data)
    // console.log("result service:", result)
    return result;
}