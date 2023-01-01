exports.getSalesReturn = function(req, res) {
  SalesReturn.findById(req.params.id, function(err, salesReturn) {
    if (err) return next(err);
    res.send(salesReturn);
  });
};

exports.createSalesReturn = function(req, res) {
  let SalesReturn = new SalesReturn(req.body);
  SalesReturn.save(function(err) {
    if (err) return next(err);
    res.send('Sales Return created successfully');
  });
};

exports.updateSalesReturn = function(req, res) {
  SalesReturn.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesReturn
  ) {
    if (err) return next(err);
    res.send('Sales Return updated successfully');
  });
};

exports.deleteSalesReturn = function(req, res) {
  SalesReturn.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Return deleted successfully');
  });
};