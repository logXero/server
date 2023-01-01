const purchaseOrderInvoiceSchema = new mongoose.Schema({
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
    unit: {
      type: String,
    },
    amount: {
      type: Number,
    },
    notations: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('PurchaseOrderInvoice', purchaseOrderInvoiceSchema);