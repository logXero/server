const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
	{
		userId: { type: String, trim: true },
		firstName: { type: String, trim: true },
		middleName: { type: String, trim: true },
		lastName: { type: String, trim: true },
		username: { type: String, trim: true },
		email: { type: String, trim: true },
		phone: { type: String, trim: true },
		password: { type: String, trim: true, required: true },
		roleId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"role" },
		departmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"department" },
		tokens: [{ token: { type: String, required: true } }],
		
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;






