const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('../app');

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const userInfo = {
      email: email,
      passwordHash: hash,
    };
    const newUser = await new User(userInfo);
    const savedUser = await newUser.save();
    res.status(200).json({success: true, data: savedUser})
  } catch (error) {
    console.log(error);
    res.status(500).json({sucess:false, message: error.message})
  }
};



module.exports = {
    createUser, 
  };