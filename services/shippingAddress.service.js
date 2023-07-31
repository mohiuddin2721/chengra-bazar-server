const Address = require("../models/ShippingAddress");

exports.getShippingAddressByEmailService = async (query) => {
    const address = await Address.find(query)
    return address;
}

exports.createShippingAddressService = async (req) => {
    // console.log("address_service", req.body)
    const address = await Address.create(req.body);
    return address;
}

exports.updateShippingAddressByIdService = async (addressId, data) => {
    const address = await Address.findById(addressId);
    // console.log("data", data)
    const result = await address.set(data).save();
    // console.log("result", result)
    return result;
}