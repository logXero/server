exports.getPurchaseWuotation = function(req, res) {
  PurchaseWuotation.findById(req.params.id, function(
    err,
    purchaseWuotation
  ) {
    if (err) return next(err);
    res.send(purchaseWuotation);
  });
};

exports.createPurchaseWuotation = function(req, res) {
  let purchaseWuotation = new PurchaseWuotation(req.body);
  purchaseWuotation.save(function(err) {
    if (err) return next(err);
    res.send('Purchase order Quotation created successfully');
  });
};

exports.updatePurchaseWuotation = function(req, res) {
  PurchaseWuotation.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, purchaseWuotation) {
      if (err) return next(err);
      res.send('Purchase order Quotation updated successfully');
    }
  );
};
exports.deletePurchaseWuotation = function(req, res) {
  PurchaseWuotation.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Purchase order Quotation deleted successfully');
  });
};
