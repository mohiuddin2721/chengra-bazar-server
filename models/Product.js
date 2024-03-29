const mongoose = require('mongoose');
// const validator = require('validator');

// Product schema design
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
  prePrice: {
    type: Number,
    min: [0, "Price can't be negative."],
  },
  imageURL: [{
    type: [String],
    // type: Array,
    required: true,
    // validate: {
    //   validator: (value) => {
    //     if (!Array.isArray(value)) {
    //       return false;
    //     }
    //     let isValid = true;
    //     value.forEach(url => {
    //       if (!validator.isURL(url)) {
    //         isValid = false;
    //       }
    //     });
    //     return isValid;
    //   },
    //   message: 'Please provide valid image urls'
    // }
  }],
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
  color: {
    type: String,
  },
  brand: {
    type: String,
  },
  ratting: {
    type: Number,
  }
}, {
  timestamps: true
});

// mongoose middleware for saving data: pre/post
// productSchema.pre('save', function (next) {
//   console.log('Before saving data');
// take action here

//   next();
// })

// productSchema.post('save', function (dox, next) {
//   console.log('After saving data');
// take action here

//   next();
// })

// schema -> model -> query
const Product = mongoose.model('Product', productSchema);

module.exports = Product;