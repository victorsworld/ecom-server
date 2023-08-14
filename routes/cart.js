const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../utils/jwtValidate');
const {fillCart} = require('../controller/cartController');

router.post('/fillcart', jwtValidate, fillCart)


module.exports = router