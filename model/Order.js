const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const orderSchema = new mongoose.Schema({
  user: { type: String, ref: 'user' },
  _id: { type: String, default: u },
  status: {
    type: String,
    enum: ['ordered', 'completed', 'shipped', 'refund', 'replaced'],
    default: 'ordered',
  },
  data: { type: String, default: Date.now },
  shippingAddress: { type: String },
  item: { type: String },
  tran_amount: { type: Number },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
