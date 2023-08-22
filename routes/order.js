const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../utils/jwtValidate');

const {createUserOrder, orderHistory } = require('../controller/orderController')


router.post('/create-order', jwtValidate, createUserOrder)

router.get('/order-history',jwtValidate, orderHistory)



module.exports = router;