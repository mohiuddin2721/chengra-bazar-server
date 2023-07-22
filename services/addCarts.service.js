const AddCart = require("../models/AddCart");


exports.getAddCartsService = async (req) => {
    const addCartsProduct = await AddCart.find()
    return addCartsProduct;
}

exports.createAddCartsService = async (req) => {
    const addCartData = await AddCart.create(req.body);
    console.log("product", req.body)
    return addCartData;
}