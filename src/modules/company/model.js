const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  vatRate: {
    type: Number,
  },
  address: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  currency: {
    type: String,
  },
});
module.exports = mongoose.model("Company", companySchema);
