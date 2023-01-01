const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DepartmentSchema = new mongoose.Schema(
	{
		department: { type: String, trim: true },
		departmentAlias: { type: String, trim: true },
		
	},
	{ timestamps: true }
);

const Department = mongoose.model("department", DepartmentSchema);
module.exports = Department;






