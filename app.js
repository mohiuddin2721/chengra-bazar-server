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

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    minLength: [4, 'Name must be at least 4 characters.'],
    maxLength: [100, 'Name is too large. It must be at least 100 characters'],
  },
  country: {
    type: String,
    required: true,
    trim: true,
    minLength: [4, 'Name must be at least 4 characters.'],
    maxLength: [50, 'Name is too large. It must be at least 50 characters'],
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Type the password']
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true,
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
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});



// posting to database
app.post('/api/v1/product', async (req, res, next) => {
  try {
    // data save() or create()
    // const result = await Product.create(req.body);
    // save() is the best method to insert data in database, because we can take any action before the data insert;
    // instance creation -> Do something -> save()
    const product = new Product(req.body);
    if (product.quantity === 0) {
      product.status = 'out-of-stock';
    }
    const result = await product.save();

    res.status(200).json({
      status: 'success',
      message: 'Successfully data inserted',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data is not inserted',
      error: error.message,
    })
  }
})

// get all product
app.get('/api/v1/products', async (req, res, next) => {
  try {
    const products = await Product.find({ _id: '645d2ac43573c32f8b64650b'});
    res.status(200).json({
      status: 'success',
      data: products,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get the data",
      error: error.message,
    })
  }
})

module.exports = app;