const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema;
