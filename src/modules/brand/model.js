const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const BrandSchema = new mongoose.Schema(
	{
		brand: { type: String, trim: true },
		brandAlias: { type: String, trim: true },
	},
	{ timestamps: true }
);

const Brand = mongoose.model("brand", BrandSchema);
module.exports = Brand;






