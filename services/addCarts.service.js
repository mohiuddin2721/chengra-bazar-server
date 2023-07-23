const AddCart = require("../models/AddCart");

exports.getAddCartsService = async (query) => {
    const addCartsProduct = await AddCart.find(query)
    return addCartsProduct;
}

exports.createAddCartsService = async (req) => {
    const addCartData = await AddCart.create(req.body);
    // console.log("product", req.body)
    return addCartData;
}

exports.deleteAddCartsByIdService = async (id) => {
    const result = AddCart.deleteOne({ _id: id });
    return result;
}