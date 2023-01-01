const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RoleSchema = new mongoose.Schema(
	{
		role: { type: String, trim: true },
		roleAlias: { type: String, trim: true },
	},
	{ timestamps: true }
);

const Role = mongoose.model("role", RoleSchema);
module.exports = Role;






