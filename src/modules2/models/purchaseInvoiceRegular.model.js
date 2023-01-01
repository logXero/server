const purchaseInvoiceRegularSchema = new mongoose.Schema({
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
    purchaseAccount: {
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
  });
  
  module.exports = mongoose.model('PurchaseInvoiceRegular', purchaseInvoiceRegularSchema);