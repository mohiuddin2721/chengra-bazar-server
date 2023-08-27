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

exports.getAllPaymentDataService = async () => {
    const res = await Payment.find()
    return res;
}

exports.getPaymentDataByEmailService = async (query) => {
    // const email = query;
    const res = await Payment.find(query)
    return res;
}

exports.updatePaymentDataStatusService = async (req) => {
    console.log(req.body)
    const { id } = req.params;
    const selectedData = await Payment.findById({ _id: id })
    const result = await selectedData.set(req.body).save()
    // console.log(result)
    return result;
}