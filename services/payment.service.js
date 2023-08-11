const AddCart = require("../models/AddCart");
const Payment = require("../models/payment")

exports.postPaymentDataService = async (req) => {
    const data = req.body;
    const deleteItem = data?.itemId;
    // console.log("data itemId:", data?.itemId)
    // console.log("data service email:", req.user.email)
    const result = await Payment.create(data)
    const deletedCart = await AddCart.deleteMany({ _id: deleteItem })
    // console.log("result service:", result)
    return { result, deletedCart };
}