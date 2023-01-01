exports.getRejectionOutVoucher = function(req, res) {
  RejectionOutVoucher.findById(req.params.id, function(
    err,
    rejectionOutVoucher
  ) {
    if (err) return next(err);
    res.send(rejectionOutVoucher);
  });
};

exports.createRejectionOutVoucher = function(req, res) {
  let rejectionOutVoucher = new RejectionOutVoucher(req.body);
  rejectionOutVoucher.save(function(err) {
    if (err) return next(err);
    res.send('Rejection out voucher created successfully');
  });
};

exports.updateRejectionOutVoucher = function(req, res) {
  RejectionOutVoucher.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, rejectionOutVoucher) {
      if (err) return next(err);
      res.send('Rejection out voucher updated successfully');
    }
  );
};

exports.deleteRejectionOutVoucher = function(req, res) {
  RejectionOutVoucher.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Rejection out voucher deleted successfully');
  });
};