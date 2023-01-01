exports.getExcise = function(req, res) {
  Excise.findById(req.params.id, function(err, excise) {
    if (err) return next(err);
    res.send(excise);
  });
};

exports.createExcise = function(req, res) {
  let excise = new Excise(req.body);
  excise.save(function(err) {
    if (err) return next(err);
    res.send('Excise created successfully');
  });
};

exports.updateExcise = function(req, res) {
  Excise.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    excise
  ) {
    if (err) return next(err);
    res.send('Excise updated successfully');
  });
};

exports.deleteExcise = function(req, res) {
  Excise.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Excise deleted successfully');
  });
};