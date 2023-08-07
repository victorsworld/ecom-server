const express = require('express');
const router = express.Router();
const {adminQuantity, oneProduct, } = require("../controller/shirtController")

router.post('/inventory', adminQuantity)

router.get('/product', oneProduct)

router.get('/all-product',)

module.exports = router;