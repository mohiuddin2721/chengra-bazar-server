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

exports.updateAddCartByIdService = async (productId, data) => {
    // console.log(data)
    // const result = await AddCart.updateOne(
    //     { _id: productId },
    //     { $set: data },
    //     { runValidators: true }
    // );

    // another way to update data where doesn't need runValidator
    const product = await AddCart.findById(productId);
    const updatedProduct = {
        quantityOrder: data.quantityOrder,
        total: data.quantityOrder * data.price,
        shifting: data.quantityOrder * 20,
    };
    // console.log("updatedProduct", updatedProduct)
    const result = await product.set(updatedProduct).save();
    // console.log("result", result)
    return result;
}

exports.deleteAddCartsByIdService = async (id) => {
    const result = AddCart.deleteOne({ _id: id });
    return result;
}