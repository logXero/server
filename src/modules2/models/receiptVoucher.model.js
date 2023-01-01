const receiptVoucherSchema = new mongoose.Schema({
    voucherNumber: {
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
    receipt: {
      type: String,
    },
    amount: {
      type: Number,
    },
    amountInWords: {
      type: String,
    },
    notations: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('ReceiptVoucher', receiptVoucherSchema);