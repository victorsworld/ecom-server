const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../utils/jwtValidate');
const {fillCart, getCart, editCart} = require('../controller/cartController');

router.post('/fillcart', jwtValidate, fillCart);

router.get('/getcart', jwtValidate, getCart)

router.put('/editcart/:id', jwtValidate, editCart)


module.exports = router