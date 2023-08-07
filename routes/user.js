const express = require('express');
const router = express.Router();

const { createUser, loginUser } = require("../controller/userController")
// const {} = require("../controller/shirtController")
// const {} = require("../controller/orderController")

router.post('/register',createUser);

router.post('/login', loginUser);

module.exports = router;