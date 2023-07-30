const mongoose = require('mongoose');

const shippingAddressSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const ShippingAddress = mongoose.model('ShippingAddress', shippingAddressSchema)

module.exports = ShippingAddress;