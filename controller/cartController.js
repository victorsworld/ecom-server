const Cart = require('../model/Cart');
const Shirt = require('../model/Shirt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fillCart = async (req, res) => {
    try {
      const user= res.locals.decodedToken.userId;
      const { color, size } = req.body; 

      let cart = await Cart.findOne({ owner: user });
      const shirt = await Shirt.findOne({ color });

      const productDetails = {
        shirtId: shirt._id,
        color,
        size,
        price: shirt.price,
        quantity: 1
      };
      
    
      if (!cart) {
        const newCart = new Cart({
          owner: user,
          product: [],
          subTotal: 0
        });
        const saveCart = await newCart.save();
        cart = await Cart.findOne({owner: user})
        // return res.status(200).json({ success: true, data: saveCart });
      }

      if (!shirt) {
        return res.status(400).json({ success: false, message: 'Shirt not found' });
      }
      const newSubTotal = cart.subTotal + shirt.price;
      await Cart.findOneAndUpdate(
        { owner: user },
        { $push: { product: productDetails, }, subTotal: newSubTotal  }
      );
  
      res.status(200).json({ success: true, message: 'Product added to cart' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: 'Error', error: error });
    }
  };
  const getCart = async(req, res) =>{
    try {
        const user= res.locals.decodedToken.userId;
        const findCart = await Cart.findOne({owner: user})
        if(!findCart){
           return res.status(500).json({success: false, message: 'Cart is empty.'})
        }
        return res.status(200).json({success: true, data: findCart})
      
    } catch (error) {
        console.log(error.message)
        res.status(500).song({success:false, message: 'Error', error: error})
    }
  }

  const editCart = async (req, res) => {
    try {
        const user= res.locals.decodedToken.userId;
        const { _id, color, size, quantity } = req.body;
        const cart = await Cart.findOne({ owner: user });
        const updateCart = await Cart.findOneAndUpdate({ _id: id }, req.body);
    } catch (error) {
        
    }
  }
/* 

put edit item while in cart,
or delete item in the cart,
order is completed it will delete product in the cart and zero it out. 
*/

// const updateUser = await User.findOneAndUpdate(
//     { _id: user },
//     { $push: { todos: newTodo._id } }
//   );

module.exports = { fillCart, getCart };
