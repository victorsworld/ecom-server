const express = require('express');
const router = express.Router();
const {adminQuantity, oneProduct, allProduct, editProduct, deleteProduct } = require("../controller/shirtController")

router.post('/inventory', adminQuantity)

router.get('/product', oneProduct)

router.get('/all-product', allProduct)

router.put('/edit-product/:id', editProduct)

router.delete('/delete-product/:id', deleteProduct)

module.exports = router;