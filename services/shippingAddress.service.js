const ShippingAddress = require("../models/ShippingAddress");

exports.getShippingAddressByEmailService = async (query) => {
    const address = await ShippingAddress.find(query)
    return address;
}

exports.createShippingAddressService = async (req) => {
    const address = await ShippingAddress.create(req.body);
    // console.log("product", req.body)
    return address;
}