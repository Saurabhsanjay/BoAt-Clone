require("dotenv").config();
const ProductsModel = require("../routes/product/product.model");

const createProduct = async (req, res) => {
  const {
    bestseller,
    dailydeals,
    SmartWatches,
    TrendingWireless,
    Trimmer,
    Marvel,
    Dc,
  } = req.body;

  if (!bestseller) {
    return res.status(403).send("Something went wrong");
  }

  try {
    const product = new ProductsModel({
      bestseller,
      dailydeals,
      SmartWatches,
      TrendingWireless,
      Trimmer,
      Marvel,
      Dc,
    });
    await product.save();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};


const getAllProducts = async (req, res) => {
  try {
    const productsData = await ProductsModel.find();
    return res.status(200).send(productsData);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = { createProduct, getAllProducts };
