const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const userSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  cart: [{type: String, ref: "cart"}],
  passwordHash: { type: String, required: true },
  createdAt: { type: String, default: Date.now }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
