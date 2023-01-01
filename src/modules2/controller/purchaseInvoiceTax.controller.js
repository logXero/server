exports.getPurchaseInvoiceTax = function(req, res) {
  PurchaseInvoiceTax.findById(req.params.id, function(err, purchaseInvoiceTax) {
    if (err) return next(err);
    res.send(purchaseInvoiceTax);
  });
};

exports.createPurchaseInvoiceTax = function(req, res) {
  let PurchaseInvoiceTax = new PurchaseInvoiceTax(req.body);
  PurchaseInvoiceTax.save(function(err) {
    if (err) return next(err);
    res.send('PurchaseInvoiceTax created successfully');
  });
};

exports.updatePurchaseInvoiceTax = function(req, res) {
  PurchaseInvoiceTax.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    PurchaseInvoiceTax
  ) {
    if (err) return next(err);
    res.send('PurchaseInvoiceTax updated successfully');
  });
};

exports.deletePurchaseInvoiceTax = function(req, res) {
  PurchaseInvoiceTax.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('PurchaseInvoiceTax deleted successfully');
  });
};