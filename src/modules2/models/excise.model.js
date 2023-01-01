const exciseSchema = new mongoose.Schema({
  exciseName: {
    type: String,
    required: true,
  },
  exciseCode: {
    type: String,
  },
  calculation: {
    type: String,
  },
  exciseRate: {
    type: Number,
  },
});
module.exports = mongoose.model("Excise", exciseSchema);
