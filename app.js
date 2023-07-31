const express = require('express');
const app = express();
const cors = require('cors');

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

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});

app.use('/api/v1/products', productRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/addCart', addCartsRoute)
app.use('/api/v1/address', shippingAddress)

module.exports = app;