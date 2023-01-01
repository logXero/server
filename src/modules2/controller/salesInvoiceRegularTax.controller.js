exports.getSalesInvoiceRegularTax = function(req, res) {
  SalesInvoiceRegularTax.findById(req.params.id, function(err, salesInvoiceRegularTax) {
    if (err) return next(err);
    res.send(salesInvoiceRegularTax);
  });
};

exports.createSalesInvoiceRegularTax = function(req, res) {
  let SalesInvoiceRegularTax = new SalesInvoiceRegularTax(req.body);
  SalesInvoiceRegularTax.save(function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Regular Tax created successfully');
  });
};

exports.updateSalesInvoiceRegularTax = function(req, res) {
  SalesInvoiceRegularTax.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesInvoiceRegularTax
  ) {
    if (err) return next(err);
    res.send('Sales Invoice Regular Tax updated successfully');
  });
};

exports.deleteSalesInvoiceRegularTax = function(req, res) {
  SalesInvoiceRegularTax.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Regular Tax deleted successfully');
  });
};