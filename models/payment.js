const mongoose = require('mongoose');
 
const paymentSchema = mongoose.Schema({
    selectedId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    selectedProductImg: {
        type: String,
        required: true,
    },
    quantityOrder: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    shifting: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;