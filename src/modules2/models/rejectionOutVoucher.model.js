const rejectionOutVoucherSchema = new mongoose.Schema({
    rejectionNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    accountName: {
      type: String,
    },
    orderNumber: {
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
    per: {
      type: String,
    },
    amount: {
      type: Number,
    },
    narration: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('RejectionOutVoucher', rejectionOutVoucherSchema);