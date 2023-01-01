const paymentReceiptSchema = new mongoose.Schema({
    invoiceNumber: {
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
    receiptPayment: {
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
  
  module.exports = mongoose.model('PaymentReceipt', paymentReceiptSchema);