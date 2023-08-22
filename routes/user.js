const express = require('express');
const router = express.Router();

const { createUser, loginUser, validateUser } = require('../controller/userController');
const { oneProduct, allProduct } = require('../controller/shirtController');
const {usersOrderHistory,createUserOrder,} = require('../controller/orderController');

const {  jwtValidate } = require('../utils/jwtValidate');
const { validateUserData } = require('../utils/validateUserData')
const { checkIfEmpty } = require('../utils/checkIfEmpty')

router.post('/register', checkIfEmpty, validateUserData, createUser );

router.post('/login',checkIfEmpty, validateUserData, loginUser);

router.get('/validate',jwtValidate, validateUser)

router.get('/product/:id', oneProduct);

router.get('/all-product', allProduct);

module.exports = router;
