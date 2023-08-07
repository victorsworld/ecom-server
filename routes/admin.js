const express = require('express');
const router = express.Router();
const {adminQuantity} = require("../controller/shirtController")

router.post('/inventory', adminQuantity)

module.exports = router;