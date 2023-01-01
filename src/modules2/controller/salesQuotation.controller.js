exports.getSalesQuotation = function(req, res) {
  SalesQuotation.findById(req.params.id, function(err, salesQuotation) {
    if (err) return next(err);
    res.send(salesQuotation);
  });
};

exports.createSalesQuotation = function(req, res) {
  let SalesQuotation = new SalesQuotation(req.body);
  SalesQuotation.save(function(err) {
    if (err) return next(err);
    res.send('Sales Quotation created successfully');
  });
};

exports.updateSalesQuotation = function(req, res) {
  SalesQuotation.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesQuotation
  ) {
    if (err) return next(err);
    res.send('Sales Quotation updated successfully');
  });
};

exports.deleteSalesQuotation = function(req, res) {
  SalesQuotation.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Quotation deleted successfully');
  });
};