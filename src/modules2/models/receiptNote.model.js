const receiptNoteSchema = new mongoose.Schema({
    orderDetails: {
      orderNumber: {
        type: String,
      },
      date: {
        type: Date,
      },
      otherReferences: {
        type: String,
      },
    },
    supplierDetails: {
      supplier: {
        type: String,
      },
      address: {
        type: String,
      },
      vatPanNumber: {
        type: String,
      },
    },
  });
  
  module.exports = mongoose.model('ReceiptNote', receiptNoteSchema);