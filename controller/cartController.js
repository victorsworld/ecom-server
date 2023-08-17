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
        res.status(500).json({success:false, message: 'Error', error: error})
    }
  }

  const editCart = async (req, res) => {
    try {
        const user= res.locals.decodedToken.userId;
        const { id } = req.params;
        const updateCart = await Cart.findOneAndUpdate({ owner: user, "product.shirtId": id }, {$set: {'product.$.size': req.body.size, 'product.$.quantity': req.body.quantity, 'product.$.price': req.body.price}});
        return res.status(200).json({success: true, data: updateCart})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false, message: 'Error', error: error})
    }
  }
  const deleteCart = async (req, res) => {
    try {
      const user = res.locals.decodedToken.userId;
  
      const deletedCart = await Cart.findOneAndDelete({ owner: user });
  
      if (!deletedCart) {
        return res.status(404).json({ success: false, message: 'Cart not found' });
      }
  
      res.status(200).json({ success: true, message: 'Cart deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: 'Error', error: error });
    }
  };

module.exports = { fillCart, getCart, editCart };
