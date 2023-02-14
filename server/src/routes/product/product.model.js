const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    bestseller: { type: Array },
    dailydeals: { type: Array },
    SmartWatches: { type: Array },
    TrendingWireless: { type: Array },
    Trimmer: { type: Array },
    Marvel: { type: Array },
    Dc: { type: Array },
  },
  { versionKey: false }
);

const ProductsModel = model("products", productSchema);
module.exports = ProductsModel;
