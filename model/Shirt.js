const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const shirtSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  name:{ type:String, default:'item'},
  price:{type: Number, default: 20},
  img:{type: String, required: false},
  color: {type: String, enum:['black','berry', 'watermelon', 'ice blue', 'grey']},
  small: {
    type: Number,
    default: 0
  },
  medium: {
    type: Number,
    default: 0
  },
  large: {
    type: Number,
    default: 0
  },
  xlarge: {
    type: Number,
    default: 0
  },
  Description: { type: String, required: false },
  lastModified: { type: Date, default: Date.now },
	createAt: { type: Date, default: Date.now },
});

const Shirt = mongoose.model('admin', shirtSchema);

module.exports = Shirt;

/*
User- email, password, firstName, LastName, billing address, birthday
Product- name, quantity, size, color, description, categories [eternity, 30, s, white, …] [eternity, 0, m, white, …] sold out… (these products are there originally, user cannot add or remove these products)
Cart- [{ productId, quantity}], userId = not fulfilled, quantity from product does not change.
Stretch
Order - orderOwner, [products], purchase total, shipping status, shipping address
*/
