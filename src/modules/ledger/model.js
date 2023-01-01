const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
    ledgerName: {
      type: String,
      required: true,
    },
    under: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    address: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
    creditPeriod: {
      type: Number,
    },
    creditLimit: {
      type: Number,
    },
    clientType: {
      type: String,
    },
    bankDetails: {
      type: String,
    },
    chequeDetails: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('Ledger', ledgerSchema);
  