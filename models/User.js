const mongoose = require('mongoose');
const validator = require("validator");

// const bcrypt = require("bcrypt");

// User schema design
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
    minLength: [3, "Name must be at least 5 characters."],
    maxLength: [50, "Name cannot exceed more than 50 character."]
  },
  email: {
    type: String,
    // validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    unique: true,
    required: [true, "Email address is required"]
  },
  // password: {
  //   type: String,
  //   required: [true, 'Password is required'],
  //   validate: {
  //     validator: (value) =>
  //       validator.isStrongPassword(value, {
  //         minLength: 6,
  //         minLowercase: 1,
  //         minUppercase: 1,
  //         minNumbers: 1,
  //         minSymbols: 1,
  //       }),
  //     message: "Please provide stronger Password"
  //   }
  // },
  // confirmPassword: {
  //   type: String,
  //   required: [true, 'Please confirm your password'],
  //   validate: {
  //     validator: function (value) {
  //       return value === this.password;
  //     },
  //     message: "Password is not match"
  //   }
  // },
  role: {
    type: String,
    enum: ["buyer", "storeManager", "admin"],
    default: "buyer",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "block"],
    default: "active",
  },
  contactNumber: {
    type: String,
    validate: [validator.isMobilePhone, "Please provide a valid contact number"]
  },
  country: {
    type: String,
    trim: true,
    minLength: [4, 'Name must be at least 4 characters.'],
    maxLength: [50, 'Name is too large. It must be within 50 characters'],
  },
  imageUrl: {
    type: String,
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true,
});

// userSchema.pre("save", function (next) {
//   const password = this.password;

//   const hashedPassword = bcrypt.hashSync(password);

//   this.password = hashedPassword;
//   this.confirmPassword = undefined;

// next();
// })

const User = mongoose.model('User', userSchema);

module.exports = User;