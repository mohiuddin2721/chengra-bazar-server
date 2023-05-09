const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chengra_Bazar route is working! YaY');
});

module.exports = app;