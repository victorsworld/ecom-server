const express = require('express');
const router = express.Router();
const {adminQuantity, editProduct, deleteProduct, editFinalProduct } = require("../controller/shirtController")

router.post('/inventory', adminQuantity)

router.put('/edit-product/:id', editProduct)

router.delete('/delete-product/:id', deleteProduct)

// router.put('/edit-final-product/:id',editFinalProduct)

module.exports = router;