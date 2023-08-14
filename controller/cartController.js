const Cart = require('../model/Cart');
const Shirt = require('../model/Shirt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fillCart = async (req, res) => {
    try {
      const user= res.locals.decodedToken.userId;
      const { color, size } = req.body; 

      const cart = await Cart.findOne({ owner: user });
  
      if (!cart) {
        const newCart = new Cart({
          owner: user,
          product: [],
          subTotal: 0
        });
        const saveCart = await newCart.save();
        return res.status(200).json({ success: true, data: saveCart });
      }

      const shirt = await Shirt.findOne({ color });
      if (!shirt) {
        return res.status(400).json({ success: false, message: 'Shirt not found' });
      }
      const productDetails = {
        _id: shirt._id,
        color,
        size,
        price: shirt.price,
        quantity: 1
      };
      const newSubTotal = cart.subTotal + shirt.price;
  
      await Cart.findOneAndUpdate(
        { owner: user },
        { $push: { product: productDetails, }, subTotal: newSubTotal  }
      );
  
      res.status(200).json({ success: true, message: 'Product added to cart ' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: 'Error', error: error });
    }
  };
/* 

put edit item while in cart,
or delete item in the cart,
order is completed it will delete product in the cart and zero it out. 
*/

// const updateUser = await User.findOneAndUpdate(
//     { _id: user },
//     { $push: { todos: newTodo._id } }
//   );

module.exports = { fillCart };
