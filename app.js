const express = require('express');
const app = express();
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());

// route
const productRoute = require('./routes/products.route');

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});

app.use('/api/v1/products', productRoute)
app.use('/api/v1/category', categoryRoute)

module.exports = app;