exports.getServiceVoucher = function(req, res) {
  ServiceVoucher.findById(req.params.id, function(err, serviceVoucher) {
    if (err) return next(err);
    res.send(serviceVoucher);
  });
};

exports.createServiceVoucher = function(req, res) {
  let serviceVoucher = new ServiceVoucher(req.body);
  serviceVoucher.save(function(err) {
    if (err) return next(err);
    res.send('Service Voucher created successfully');
  });
};

exports.updateServiceVoucher = function(req, res) {
  ServiceVoucher.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    serviceVoucher
  ) {
    if (err) return next(err);
    res.send('Service Voucher updated successfully');
  });
};

exports.deleteServiceVoucher = function(req, res) {
  ServiceVoucher.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Service Voucher deleted successfully');
  });
};
