const purchaseSalesReturnSchema = new mongoose.Schema({
    invoiceNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    referenceNumber: {
      type: String,
    },
    pAccountNameBS: {
      type: String,
    },
    purchaseSalesAccount: {
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
  });
  
  module.exports = mongoose.model('PurchaseSalesReturn', purchaseSalesReturnSchema)