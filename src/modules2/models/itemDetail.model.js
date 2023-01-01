const itemDetailSchema = new mongoose.Schema({
    itemName: {
      type: String,
      required: true,
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
    amount: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('ItemDetail', itemDetailSchema);