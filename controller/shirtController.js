const Shirt = require('../model/Shirt');

const adminQuantity = async (req, res) => {
  try {
    const { price, name, small, medium, large, xlarge, description } = req.body;

    const existingShirt = await Shirt.findOne({ name });

    if (existingShirt) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Product with this name already exists',
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
    };
    const newShirt = await new Shirt(inventoryInfo);
    const savedInventory = await newShirt.save();
    res.status(200).json({ success: true, data: savedInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

const allInventory = async (req, res) => {
  const findProduct = await Shirt.findOne;
};
// get all
// edit
// delete

//Im going to want to make a request to the user server to make a get request for on shirt and to take it out the inventory 'Get'
// get shirt by id

module.exports = { adminQuantity };
