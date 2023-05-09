const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middlewares
app.use(cors());
app.use(express.json());

// schema design
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product'],
    trim: true,
    minLength: [3, 'Name must be at least 3 characters.'],
    maxLength: [100, 'Name is too large. It must be at least 100 characters'],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be negative."],
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ['kg', 'litter', 'pcs'],
      message: "Unit value can't be {VALUE}, must be kg/litre/pcs",
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity can't be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return isInteger;
        }
      }
    },
    message: 'Quantity must be an integer',
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['in-stock', 'out-of-stock', 'discontinued'],
      message: "Status can't be {VALUE}",
    }
  },
  categories: {
    type: String,
    required: [true, 'Please give the category of the product'],
    minLength: [3, 'category must be at least 3 characters.'],
    maxLength: [100, 'category is too large. It must be at least 100 characters'],
  },
}, {
  timestamps: true
})

// schema -> model -> query
const Product = mongoose.model('Product', productSchema)

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});

module.exports = app;