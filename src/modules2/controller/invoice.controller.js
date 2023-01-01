exports.getInvoice = function(req, res) {
  Invoice.findById(req.params.id, function(err, invoice) {
    if (err) return next(err);
    res.send(invoice);
  });
};

exports.createInvoice = function(req, res) {
  let invoice = new Invoice(req.body);
  invoice.save(function(err) {
    if (err) return next(err);
    res.send('Invoice created successfully');
  });
};

exports.updateInvoice = function(req, res) {
  Invoice.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    invoice
  ) {
    if (err) return next(err);
    res.send('Invoice updated successfully');
  });
};

exports.deleteInvoice = function(req, res) {
  Invoice.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Invoice deleted successfully');
  });
};