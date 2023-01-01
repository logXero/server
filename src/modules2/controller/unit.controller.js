exports.getUnit = function(req, res) {
  Unit.findById(req.params.id, function(err, unit) {
    if (err) return next(err);
    res.send(unit);
  });
};

exports.createUnit = function(req, res) {
  let unit = new Unit(req.body);
  unit.save(function(err) {
    if (err) return next(err);
    res.send('Unit created successfully');
  });
};

exports.updateUnit = function(req, res) {
  Unit.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    unit
  ) {
    if (err) return next(err);
    res.send('Unit updated successfully');
  });
};

exports.deleteUnit = function(req, res) {
  Unit.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Unit deleted successfully');
  });
};