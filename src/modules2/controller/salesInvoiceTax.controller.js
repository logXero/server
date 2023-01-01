exports.getSalesInvoiceTax = function(req, res) {
  SalesInvoiceTax.findById(req.params.id, function(err, salesInvoiceTax) {
    if (err) return next(err);
    res.send(salesInvoiceTax);
  });
};

exports.createSalesInvoiceTax = function(req, res) {
  let SalesInvoiceTax = new SalesInvoiceTax(req.body);
  SalesInvoiceTax.save(function(err) {
    if (err) return next(err);
    res.send('Sales Invoice  Tax created successfully');
  });
};

exports.updateSalesInvoiceTax = function(req, res) {
  SalesInvoiceTax.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesInvoiceTax
  ) {
    if (err) return next(err);
    res.send('Sales Invoice  Tax updated successfully');
  });
};

exports.deleteSalesInvoiceTax = function(req, res) {
  SalesInvoiceTax.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Invoice  Tax deleted successfully');
  });
};