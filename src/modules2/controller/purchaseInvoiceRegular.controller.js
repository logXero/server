exports.getPurchaseInvoiceRegular = function(req, res) {
  PurchaseInvoiceRegular.findById(req.params.id, function(err, purchaseInvoiceRegular) {
    if (err) return next(err);
    res.send(purchaseInvoiceRegular);
  });
};

exports.createPurchaseInvoiceRegular = function(req, res) {
  let PurchaseInvoiceRegular = new PurchaseInvoiceRegular(req.body);
  PurchaseInvoiceRegular.save(function(err) {
    if (err) return next(err);
    res.send('PurchaseInvoiceRegular created successfully');
  });
};

exports.updatePurchaseInvoiceRegular = function(req, res) {
  PurchaseInvoiceRegular.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    PurchaseInvoiceRegular
  ) {
    if (err) return next(err);
    res.send('PurchaseInvoiceRegular updated successfully');
  });
};

exports.deletePurchaseInvoiceRegular = function(req, res) {
  PurchaseInvoiceRegular.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('PurchaseInvoiceRegular deleted successfully');
  });
};