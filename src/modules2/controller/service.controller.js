exports.getServiceItems = function(req, res) {
  ServiceItems.findById(req.params.id, function(err, serviceItems) {
    if (err) return next(err);
    res.send(serviceItems);
  });
};

exports.createServiceItems = function(req, res) {
  let serviceItems = new ServiceItems(req.body);
  serviceItems.save(function(err) {
    if (err) return next(err);
    res.send('Service items created successfully');
  });
};

exports.updateServiceItems = function(req, res) {
  ServiceItems.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    serviceItems
  ) {
    if (err) return next(err);
    res.send('Service items updated successfully');
  });
};

exports.deleteServiceItems = function(req, res) {
  ServiceItems.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Service items deleted successfully');
  });
};
