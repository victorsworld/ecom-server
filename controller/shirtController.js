const Shirt = require('../model/Shirt');
const User = require('../model/User');

const adminQuantity = async (req, res) => {
  try {
    const { price, name, small, medium, large, xlarge, description, color } = req.body;

    const existingColor = await Shirt.findOne({ color });

    if (existingColor) {
      return res.status(400).json({
        success: false,
        message: 'Product with this color already exists',
      });
    }

    const inventoryInfo = {
      price,
      name,
      small,
      medium,
      large,
      xlarge,
      description,
      color
    };
    const newShirt = await new Shirt(inventoryInfo);
    const savedInventory = await newShirt.save();
    res.status(200).json({ success: true, data: savedInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

const oneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await Shirt.findOne({ _id: id });
    if (!foundProduct) {
      res.status(401).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: foundProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const allProduct = async (req, res) => {
  try {
    const allProduct = await Shirt.find({});
    res.status(200).json({
      success: true,
      message: 'All current product displayed.',
      data: allProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.lastModified = Date.now();
    if (req.body.completed) {
      req.body.completedDate = Date.now();
    }
    const updateProduct = await Shirt.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({ success: true, data: updateProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'error', error: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Shirt.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, data: deleteProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'error', error: error });
  }
};


module.exports = {
  adminQuantity,
  oneProduct,
  allProduct,
  editProduct,
  deleteProduct,
};
