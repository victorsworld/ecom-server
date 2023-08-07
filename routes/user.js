const express = require('express');
const router = express.Router();

const { createUser, loginUser } = require("../controller/userController")
const { oneProduct, allProduct } = require("../controller/shirtController")

router.post('/register',createUser);

router.post('/login', loginUser);

router.get('/product', oneProduct)

router.get('/all-product', allProduct)

router

module.exports = router;