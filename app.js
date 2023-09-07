const express = require('express');
const app = express();
const cors = require('cors');
const Product = require('./models/Product');

// middleware
app.use(cors());
app.use(express.json());
// Add this code to serve static files
// app.use('/images', express.static('images'));

// route
const productRoute = require('./routes/products.route');
const categoryRoute = require('./routes/category.route');
const usersRoute = require('./routes/users.route');
const addCartsRoute = require('./routes/addCarts.route');
const shippingAddress = require('./routes/shippingAddress.route');
const paymentRoute = require('./routes/payment.route');


app.use('/api/v1/products', productRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/addCart', addCartsRoute)
app.use('/api/v1/address', shippingAddress)
app.use('/api/v1/payment', paymentRoute)

// app.get("/products", async (req, res) => {
//   const product = await Product.find()
//   res.send(product)
// })

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});
app.get('/test',(req,res)=>{
  res.send('test list')
})


module.exports = app;