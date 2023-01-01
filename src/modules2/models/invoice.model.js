const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  invoiceType: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  invoiceReferenceNumber: {
    type: String,
  },
  billDate: {
    type: Date,
  },
  accountName: {
    type: String,
  },
  purchaseSalesAccount: {
    type: String,
  },
  dueDays: {
    type: Number,
  },
  orderReferenceNumber: {
    type: String,
  },
  notations: {
    type: String,
  },
  particulars: {
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
  discount: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  batchNumber: {
    type: String,
  },
  mfgDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
