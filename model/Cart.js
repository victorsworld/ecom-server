const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid,
  },
  owner: { type: String, ref: 'user', required: true },
  product: [
    {
        shirtId: {type: String, ref: 'shirt'},
      _id: { type: String, default: uuid},
      color: {
        type: String,
      },
      size: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
      },
    },
  ],
  subTotal: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/* 
Item is posted to the cart, 
put edit item while in cart,
or delete item in the cart,
order is completed it will delete product in the cart and zero it out. 
*/

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
