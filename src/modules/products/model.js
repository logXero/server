const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ProductSchema = new mongoose.Schema(
  {
    sku: { type: String, trim: true },
    productCode: { type: String, trim: true },
    productName: { type: String, trim: true },
    description: { type: String, trim: true },
    quantity: { type: String, trim: true },
    cp: { type: String, trim: true },
    mrp: { type: String, trim: true },
    brand: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: "brand" },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
/* itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  unit: {
    type: String,
  },
  itemType: {
    type: String,
  },
  mfgDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  excise: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
  },
  rate: {
    type: Number,
  },
  amount: {
    type: Number,
  }, */