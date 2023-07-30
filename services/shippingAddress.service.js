const ShippingAddress = require("../models/ShippingAddress");

exports.getShippingAddressByEmailService = async (query) => {
    const address = await ShippingAddress.find(query)
    return address;
}

exports.createShippingAddressService = async (req) => {
    const address = await ShippingAddress.create(req.body);
    // console.log("address", req.body)
    return address;
}

exports.updateShippingAddressByIdService = async (addressId, data) => {
    const address = await ShippingAddress.findById(addressId);
    // console.log("address", address)
    const result = await address.set(data).save();
    // console.log("result", result)
    return result;
}