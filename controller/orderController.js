const Order = require('../model/Order');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUserOrder = async (req, res) => {
  try {
    const { user, status, shippingAddress, item, tran_amount } = req.body;
    const newOrder = new Order({
      user,
      status,
      shippingAddress,
      item,
      tran_amount,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error creating the order', error: error.message });
  }
};

const usersOrderHistory = async (req, res) => {
    try {
      const { _id } = req.body;
      const userOrders = await Order.find({});
      res.status(200).json({ success: true, data: userOrders });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error fetching order history', error: error.message });
    }
  };
  


//'user' get all user's order history
//'admin' get all order history
//'admin' get order history by users email

// const orderSchema = new mongoose.Schema({
//     user: { type: String, ref: 'user' },
//     _id: { type: String, default: u },
//     status: {
//       type: String,
//       enum: ['ordered', 'completed', 'shipped', 'refund', 'replaced'],
//       default: 'ordered',
//     },
//     data: { type: String, default: Date.now },
//     shippingAddress: { type: String },
//     item: { type: String },
//     tran_amount: { type: Number },
//   });

module.exports = {createUserOrder, usersOrderHistory};
