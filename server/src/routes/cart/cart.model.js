const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
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

const cartModel = model("cart", cartSchema);
module.exports = cartModel;
