exports.getPurchaseAndSalesReturn = function(req, res) {
  PurchaseAndSalesReturn.findById(req.params.id, function(
    err,
    purchaseAndSalesReturn
  ) {
    if (err) return next(err);
    res.send(purchaseAndSalesReturn);
  });
};

exports.createPurchaseAndSalesReturn = function(req, res) {
  let purchaseAndSalesReturn = new PurchaseAndSalesReturn(req.body);
  purchaseAndSalesReturn.save(function(err) {
    if (err) return next(err);
    res.send('Purchase and sales return created successfully');
  });
};

exports.updatePurchaseAndSalesReturn = function(req, res) {
  PurchaseAndSalesReturn.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, purchaseAndSalesReturn) {
      if (err) return next(err);
      res.send('Purchase and sales return updated successfully');
    }
  );
};

exports.deletePurchaseAndSalesReturn = function(req, res) {
  PurchaseAndSalesReturn.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Purchase and sales return deleted successfully');
  });
};