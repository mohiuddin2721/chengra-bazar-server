const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    item: {
        type: Number,
        required: true,
    },
    itemNames: {
        type: [String],
        required: true,
    },
    itemImages: {
        type: [String],
        required: true,
    },
    itemPrices: {
        type: [Number],
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "courier", "shipped"],
        default: "pending",
    },
}, {
    timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;