const purchaseInvoiceTaxSchema = new mongoose.Schema({
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
    dateSupply: {
      type: Date,
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
    itemName: {
      type: String,
    },
    hsnSac: {
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
    discount: {
      type: Number,
    },
    taxableValue: {
      type: Number,
    },
    cgst: {
      type: Number,
    },
    sgst: {
      type: Number,
    },
    igst: {
      type: Number,
    },
    total: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('PurchaseInvoiceTax', purchaseInvoiceTaxSchema);