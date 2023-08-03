const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const userSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  email: {
    type: String,
		required: true,
		lowercase: true,
		trim: true,
		unique: true,
  },
  passwordHash: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // birthday: { type: Date, required: false },
  // billingAddress: { type: String, required: false },
  // orderHistory:[], 
  // createdAt: { type: String, default: Date.now },
});
/*

User- email, password, firstName, LastName, billing address, birthday
Product- name, quantity, size, color, description, categories [eternity, 30, s, white, …] [eternity, 0, m, white, …] sold out… (these products are there originally, user cannot add or remove these products)
Cart- [{ productId, quantity}], userId = not fulfilled, quantity from product does not change.
Stretch
Order - orderOwner, [products], purchase total, shipping status, shipping address
*/

const User = mongoose.model('user', userSchema);

module.exports = User;
