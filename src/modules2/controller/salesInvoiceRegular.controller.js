exports.getSalesInvoiceRegular = function(req, res) {
  SalesInvoiceRegular.findById(req.params.id, function(err, salesInvoiceRegular) {
    if (err) return next(err);
    res.send(salesInvoiceRegular);
  });
};

exports.createSalesInvoiceRegular = function(req, res) {
  let SalesInvoiceRegular = new SalesInvoiceRegular(req.body);
  SalesInvoiceRegular.save(function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Regular created successfully');
  });
};

exports.updateSalesInvoiceRegular = function(req, res) {
  SalesInvoiceRegular.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesInvoiceRegular
  ) {
    if (err) return next(err);
    res.send('Sales Invoice Regular updated successfully');
  });
};

exports.deleteSalesInvoiceRegular = function(req, res) {
  SalesInvoiceRegular.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Regular deleted successfully');
  });
};