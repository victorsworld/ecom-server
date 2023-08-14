const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const userInfo = {
      email: email,
      passwordHash: hash,
      role: role,
    };
    const newUser = await new User(userInfo);
    const savedUser = await newUser.save();
    res.status(200).json({success: true, data: savedUser})
  } catch (error) {
    console.log(error);
    res.status(500).json({sucess:false, message: error.message})
  }
};

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const foundUser = await User.findOne({ email });
      if (!foundUser) { return res.status(401).json({success: false,message: 'User or Password not does not match up',});
      }
  
      const isPasswordValid = await bcrypt.compare(password,foundUser.passwordHash );
      console.log(isPasswordValid)
      if (!isPasswordValid) { return res.status(401).json({success: false, message: 'User or Password not does not match up',});
      }
  
      const token = jwt.sign({ userId: foundUser._id }, process.env.SECRET_KEY, {expiresIn: '1hr',
      });
  
      return res.status(200).json({ success: true, token: token });
  
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: 'error', error: error });
    }
  };
  const validateUser = async( req, res )=>{
    try {
        const decodeToken = res.locals.decodedToken
        console.log( decodeToken )
        const findUser = await User.findOne({_id: decodeToken.userId})
        if(!findUser){
            res.status(401).json({success: false,message:'error', error: { user: "user not found"}})
        }
        return res.status(200).json({ success: true, email: findUser.email });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false,message:'error', error: error})

    }
}

module.exports = {
    createUser,
    loginUser,
    validateUser
  };