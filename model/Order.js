const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const orderSchema = new mongoose.Schema({
  owner: { type: String, ref: 'user' },
  _id: { type: String, default: uuid },
  status: {
    type: String,
    enum: ['ordered', 'completed', 'shipped', 'refund', 'replaced'],
    default: 'ordered',
  },
  date: { type: String, default: new Date().toLocaleDateString() },
  firstname:{ type: String, required: true },
  lastname:{ type: String, required: true },
  shippingaddress: { type: String, required: true },
  billingaddress:{ type: String, required: true },
  item: [
    {
      product: {
        shirt: {type: String, ref: 'shirt'},
        _id: { type: String },
        size: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    },
  ],
  tran_amount: { type: Number },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
