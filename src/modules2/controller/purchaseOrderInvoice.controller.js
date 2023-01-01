exports.getPurchaseOrderInvoice = function(req, res) {
  PurchaseOrderInvoice.findById(req.params.id, function(
    err,
    purchaseOrderInvoice
  ) {
    if (err) return next(err);
    res.send(purchaseOrderInvoice);
  });
};

exports.createPurchaseOrderInvoice = function(req, res) {
  let purchaseOrderInvoice = new PurchaseOrderInvoice(req.body);
  purchaseOrderInvoice.save(function(err) {
    if (err) return next(err);
    res.send('Purchase order invoice created successfully');
  });
};

exports.updatePurchaseOrderInvoice = function(req, res) {
  PurchaseOrderInvoice.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, purchaseOrderInvoice) {
      if (err) return next(err);
      res.send('Purchase order invoice updated successfully');
    }
  );
};
exports.deletePurchaseOrderInvoice = function(req, res) {
  PurchaseOrderInvoice.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Purchase order invoice deleted successfully');
  });
};
