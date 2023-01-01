exports.getPurchaseOrder = function(req, res) {
  PurchaseOrder.findById(req.params.id, function(
    err,
    purchaseOrder
  ) {
    if (err) return next(err);
    res.send(purchaseOrder);
  });
};

exports.createPurchaseOrder = function(req, res) {
  let purchaseOrder = new PurchaseOrder(req.body);
  purchaseOrder.save(function(err) {
    if (err) return next(err);
    res.send('Purchase order  created successfully');
  });
};

exports.updatePurchaseOrder = function(req, res) {
  PurchaseOrder.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, purchaseOrder) {
      if (err) return next(err);
      res.send('Purchase order  updated successfully');
    }
  );
};
exports.deletePurchaseOrder = function(req, res) {
  PurchaseOrder.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Purchase order  deleted successfully');
  });
};
