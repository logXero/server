exports.getSalesOrder = function(req, res) {
  SalesOrder.findById(req.params.id, function(err, salesOrder) {
    if (err) return next(err);
    res.send(salesOrder);
  });
};

exports.createSalesOrder = function(req, res) {
  let SalesOrder = new SalesOrder(req.body);
  SalesOrder.save(function(err) {
    if (err) return next(err);
    res.send('Sales Order created successfully');
  });
};

exports.updateSalesOrder = function(req, res) {
  SalesOrder.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesOrder
  ) {
    if (err) return next(err);
    res.send('Sales Order updated successfully');
  });
};

exports.deleteSalesOrder = function(req, res) {
  SalesOrder.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Order deleted successfully');
  });
};