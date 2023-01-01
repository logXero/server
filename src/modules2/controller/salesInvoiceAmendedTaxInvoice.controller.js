exports.getSalesInvoiceAmendedTaxInvoice = function(req, res) {
  SalesInvoiceAmendedTaxInvoice.findById(req.params.id, function(err, salesInvoiceAmendedTaxInvoice) {
    if (err) return next(err);
    res.send(salesInvoiceAmendedTaxInvoice);
  });
};

exports.createSalesInvoiceAmendedTaxInvoice = function(req, res) {
  let SalesInvoiceAmendedTaxInvoice = new SalesInvoiceAmendedTaxInvoice(req.body);
  SalesInvoiceAmendedTaxInvoice.save(function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Amended Tax Invoice created successfully');
  });
};

exports.updateSalesInvoiceAmendedTaxInvoice = function(req, res) {
  SalesInvoiceAmendedTaxInvoice.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesInvoiceAmendedTaxInvoice
  ) {
    if (err) return next(err);
    res.send('Sales Invoice Amended Tax Invoice updated successfully');
  });
};

exports.deleteSalesInvoiceAmendedTaxInvoice = function(req, res) {
  SalesInvoiceAmendedTaxInvoice.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Invoice Amended Tax Invoice deleted successfully');
  });
};