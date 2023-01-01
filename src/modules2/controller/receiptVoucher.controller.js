exports.getReceiptVoucher = function(req, res) {
  ReceiptVoucher.findById(req.params.id, function(err, receiptVoucher) {
    if (err) return next(err);
    res.send(receiptVoucher);
  });
};

exports.createReceiptVoucher = function(req, res) {
  let receiptVoucher = new ReceiptVoucher(req.body);
  receiptVoucher.save(function(err) {
    if (err) return next(err);
    res.send('Receipt Voucher created successfully');
  });
};

exports.updateReceiptVoucher = function(req, res) {
  ReceiptVoucher.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, receiptVoucher) {
      if (err) return next(err);
      res.send('Receipt Voucher updated successfully');
    }
  );
};

exports.deleteReceiptVoucher = function(req, res) {
  ReceiptVoucher.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Receipt Voucher deleted successfully');
  });
};