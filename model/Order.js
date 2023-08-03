const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const orderSchema = new mongoose.Schema({
  user: { type: String, ref: 'user' },
  _id: { type: String, default: u },
  data: { type: String, default: Date.now },
  shippingAddress: { type: String },
  item: { type: String },
  tran_amount: { type: Number },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;

/* 
price-total:{},
item:{},
size:{},
quantity:{},
date:{},
*/
