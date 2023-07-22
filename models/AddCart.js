const mongoose = require('mongoose');
 
const addCartSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
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
    quantity: {
        type: Number,
        required: true,
    },
    quantityOrder: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
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
}, {
    timestamps: true
});

const AddCart = mongoose.model('AddCart', addCartSchema);

module.exports = AddCart;