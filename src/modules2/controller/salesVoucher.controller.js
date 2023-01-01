exports.getSalesVoucher = function(req, res) {
  SalesVoucher.findById(req.params.id, function(err, salesVoucher) {
    if (err) return next(err);
    res.send(salesVoucher);
  });
};

exports.createSalesVoucher = function(req, res) {
  let SalesVoucher = new SalesVoucher(req.body);
  SalesVoucher.save(function(err) {
    if (err) return next(err);
    res.send('Sales Voucher created successfully');
  });
};

exports.updateSalesVoucher = function(req, res) {
  SalesVoucher.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    SalesVoucher
  ) {
    if (err) return next(err);
    res.send('Sales Voucher updated successfully');
  });
};

exports.deleteSalesVoucher = function(req, res) {
  SalesVoucher.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Sales Voucher deleted successfully');
  });
};