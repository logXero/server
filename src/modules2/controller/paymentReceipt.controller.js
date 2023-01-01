exports.getPaymentAndReceipt = function(req, res) {
  PaymentAndReceipt.findById(req.params.id, function(err, paymentAndReceipt) {
    if (err) return next(err);
    res.send(paymentAndReceipt);
  });
};

exports.createPaymentAndReceipt = function(req, res) {
  let paymentAndReceipt = new PaymentAndReceipt(req.body);
  paymentAndReceipt.save(function(err) {
    if (err) return next(err);
    res.send('Payment and receipt created successfully');
  });
};
exports.updatePaymentAndReceipt = function(req, res) {
  PaymentAndReceipt.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, paymentAndReceipt) {
      if (err) return next(err);
      res.send('Payment and receipt updated successfully');
    }
  );
};

exports.deletePaymentAndReceipt = function(req, res) {
  PaymentAndReceipt.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Payment and receipt deleted successfully');
  });
};