const voucherEntrySchema = new mongoose.Schema({
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
    debit: {
      type: Number,
    },
    credit: {
      type: Number,
    },
    amountInWords: {
      type: String,
    },
    notations: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('VoucherEntry', voucherEntrySchema);
  