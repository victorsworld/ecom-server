const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../utils/jwtValidate');
const {fillCart, getCart, editCart, deleteCartItem, deleteCart} = require('../controller/cartController');

router.post('/fillcart', jwtValidate, fillCart);

router.get('/getcart', jwtValidate, getCart)

router.put('/editcart/:id', jwtValidate, editCart)

router.delete('/deletecartitem/:id', jwtValidate, deleteCartItem)

router.delete('/deletecart', jwtValidate, deleteCart)


module.exports = router