const serviceItemSchema = new mongoose.Schema({
    itemName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    discountAmount: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('ServiceItem', serviceItemSchema);