const express = require('express');
const router = express.Router();
const {adminQuantity, oneProduct, allProduct } = require("../controller/shirtController")

router.post('/inventory', adminQuantity)

router.get('/product', oneProduct)

router.get('/all-product', allProduct)

module.exports = router;