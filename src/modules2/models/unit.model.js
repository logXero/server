const mongoose = require("mongoose");
const unitSchema = new mongoose.Schema({
  chooseMethod: {
    type: String,
  },
  shortName: {
    type: String,
  },
  formalName: {
    type: String,
  },
  decimals: {
    type: Number,
  },
});

module.exports = mongoose.model("Unit", unitSchema);
