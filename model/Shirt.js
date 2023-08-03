const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const shirtSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    trim: true,
    required: true,
  },
  quantity: { type: Number, required: true },
  Description: { type: String, required: false },
});

const Shirt = mongoose.model('shirt', shirtSchema);

module.exports = Shirt;

/*
User- email, password, firstName, LastName, billing address, birthday
Product- name, quantity, size, color, description, categories [eternity, 30, s, white, …] [eternity, 0, m, white, …] sold out… (these products are there originally, user cannot add or remove these products)
Cart- [{ productId, quantity}], userId = not fulfilled, quantity from product does not change.
Stretch
Order - orderOwner, [products], purchase total, shipping status, shipping address
*/
