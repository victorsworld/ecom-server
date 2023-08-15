const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../utils/jwtValidate');
const {fillCart, getCart} = require('../controller/cartController');

router.post('/fillcart', jwtValidate, fillCart);

router.get('/getcart', jwtValidate, getCart)


module.exports = router