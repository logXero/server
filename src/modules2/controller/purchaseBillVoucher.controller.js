exports.getPurchaseBillVoucher = function(req, res) {
  PurchaseBillVoucher.findById(req.params.id, function(
    err,
    purchaseBillVoucher
  ) {
    if (err) return next(err);
    res.send(purchaseBillVoucher);
  });
};

exports.createPurchaseBillVoucher = function(req, res) {
  let purchaseBillVoucher = new PurchaseBillVoucher(req.body);
  purchaseBillVoucher.save(function(err) {
    if (err) return next(err);
    res.send('Purchase bill voucher created successfully');
  });
};

exports.updatePurchaseBillVoucher = function(req, res) {
  PurchaseBillVoucher.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, purchaseBillVoucher) {
      if (err) return next(err);
      res.send('Purchase bill voucher updated successfully');
    }
  );
};
exports.deletePurchaseBillVoucher = function(req, res) {
  PurchaseBillVoucher.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Purchase bill voucher deleted successfully');
  });
};