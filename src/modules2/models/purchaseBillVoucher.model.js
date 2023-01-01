const purchaseBillVoucherSchema = new mongoose.Schema({
    purchaseNumber: {
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
  
  module.exports = mongoose.model('PurchaseBillVoucher', purchaseBillVoucherSchema);
  