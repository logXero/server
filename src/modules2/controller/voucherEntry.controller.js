exports.getVoucherEntry = function (req, res) {
  VoucherEntry.findById(req.params.id, function (err, voucherEntry) {
    if (err) return next(err);
    res.send(voucherEntry);
  });
};

exports.createVoucherEntry = function (req, res) {
  let VoucherEntry = new VoucherEntry(req.body);
  VoucherEntry.save(function (err) {
    if (err) return next(err);
    res.send("VoucherEntry created successfully");
  });
};

exports.updateVoucherEntry = function (req, res) {
  VoucherEntry.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, VoucherEntry) {
      if (err) return next(err);
      res.send("VoucherEntry updated successfully");
    }
  );
};

exports.deleteVoucherEntry = function (req, res) {
  VoucherEntry.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("VoucherEntry deleted successfully");
  });
};
