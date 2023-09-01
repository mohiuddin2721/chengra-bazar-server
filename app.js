const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

// middleware
app.use(cors());
app.use(express.json());
// Add this code to serve static files
app.use('/images', express.static('images'));

// route
const productRoute = require('./routes/products.route');
const categoryRoute = require('./routes/category.route');
const usersRoute = require('./routes/users.route');
const addCartsRoute = require('./routes/addCarts.route');
const shippingAddress = require('./routes/shippingAddress.route');
const paymentRoute = require('./routes/payment.route');


app.use('/products', productRoute)
app.use('/category', categoryRoute)
app.use('/users', usersRoute)
app.use('/addCart', addCartsRoute)
app.use('/address', shippingAddress)
app.use('/payment', paymentRoute)

// app.get('/', (req, res) => {
//   res.send('Chengra_Bazar route is working! YaY');
// });

const port = process.env.PORT || 8080;

// database connection
mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  console.log(`Database connection is successful`.red.bold);
});

app.listen(port, () => {
  console.log(`Chengra Bazar is running on port ${port}`.yellow.bold)
})

// module.exports = app;