const Cart = require('../model/Cart');

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const { color, size } = req.body;

    const cartItem = {
      userId: userId,
      color: color,
      size: size,
    };
    const newCartItem = new Cart(cartItem);

    await newCartItem.save();

    res
      .status(201)
      .json({ success: true, message: 'Item added to cart successfully.' });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({
        success: false,
        message: 'Error adding item to cart.',
        error: error,
      });
  }
};

module.exports = addToCart;
