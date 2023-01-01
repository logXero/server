const journalInvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    accountName: {
      type: [String],
      required: true,
    },
    amount: {
      type: [Number],
      required: true,
    },
    amountInWords: {
      type: String,
    },
    notations: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('JournalInvoice', journalInvoiceSchema);
  