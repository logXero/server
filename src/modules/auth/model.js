const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
	{
		userId: { type: String, trim: true },
		firstName: { type: String, trim: true },
		lastName: { type: String, trim: true },
		password: { type: String, trim: true, required: true },
		roleId: { type: mongoose.Schema.Types.ObjectId, required: true },
		tokens: [{ token: { type: String, required: true } }],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;






