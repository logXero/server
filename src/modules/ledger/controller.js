exports.getLedger = function(req, res) {
    Ledger.findById(req.params.id, function(err, ledger) {
      if (err) return next(err);
      res.send(ledger);
    });
  };
  
  exports.createLedger = function(req, res) {
    let ledger = new Ledger(req.body);
    ledger.save(function(err) {
      if (err) return next(err);
      res.send('Ledger created successfully');
    });
  };
  
  exports.updateLedger = function(req, res) {
    Ledger.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
      err,
      ledger
    ) {
      if (err) return next(err);
      res.send('Ledger updated successfully');
    });
  };
  
  exports.deleteLedger = function(req, res) {
    Ledger.findByIdAndRemove(req.params.id, function(err) {
      if (err) return next(err);
      res.send('Ledger deleted successfully');
    });
  };