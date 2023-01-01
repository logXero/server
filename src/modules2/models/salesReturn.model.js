const salesReturnSchema = new mongoose.Schema({
    returnNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    referenceNumber: {
      type: String,
    },
    pAccountName: {
      type: String,
    },
    saleAccount: {
      type: String,
    },
    itemName: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    rate: {
      type: Number,
    },
    unit: {
      type: String,
    },
    amount: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('SalesReturn', salesReturnSchema);