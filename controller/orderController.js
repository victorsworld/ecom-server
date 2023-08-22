const Order = require('../model/Order');

const createUserOrder = async (req, res) => {
  try {
    const user = res.locals.decodedToken.userId;

    const { status, shippingaddress, item, tran_amount, firstname, lastname, billingaddress } = req.body;

    const newOrder = new Order({
      owner: user,
      status,
      firstname,
      lastname,
      billingaddress,
      shippingaddress,
      item,
      tran_amount,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: 'Error creating the order',
        error: error.message,
      });
  }
};

const orderHistory = async (req, res) => {
  try {
    const user = res.locals.decodedToken.userId
    const userOrders = await Order.find({owner: user});
    if (!userOrders) {
      return res
        .status(500)
        .json({ success: false, message: `User's order history is empty` });
    }
    res.status(200).json({ success: true, data: userOrders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: 'Error fetching order history',
        error: error.message,
      });
  }
};

//'admin' get all order history
//'admin' get order history by users email
// get order history by date ordered or quanitity

module.exports = { createUserOrder, orderHistory };
