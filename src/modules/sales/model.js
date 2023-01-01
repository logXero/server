const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RoleSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, trim: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, trim: true }],
    isPaid: { type: String, trim: true },
    isDispatched: { type: String, trim: true },
  },
  { timestamps: true }
);

const Role = mongoose.model("role", RoleSchema);
module.exports = Role;
