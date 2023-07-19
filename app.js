const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');

// middleware
app.use(cors());
app.use(express.json());
// Add this code to serve static files
app.use('/images', express.static('images'));
// For parsing JSON bodies
// app.use(bodyParser.json({ limit: '10mb' }));
// For parsing URL-encoded bodies
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// route
const productRoute = require('./routes/products.route');
const categoryRoute = require('./routes/category.route');
const usersRoute = require('./routes/users.route');

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});

app.use('/api/v1/products', productRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/users', usersRoute)

module.exports = app;