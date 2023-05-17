const mongoose = require('mongoose');

// User schema design
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    minLength: [4, 'Name must be at least 4 characters.'],
    maxLength: [100, 'Name is too large. It must be within 100 characters'],
  },
  country: {
    type: String,
    required: true,
    trim: true,
    minLength: [4, 'Name must be at least 4 characters.'],
    maxLength: [50, 'Name is too large. It must be within 50 characters'],
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Type the password'],
    minLength: [6, 'password must be at least 6 characters.'],
    maxLength: [14, 'password is too large. It must be within 14 characters'],
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;