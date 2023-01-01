exports.getJournalInvoice = function(req, res) {
  JournalInvoice.findById(req.params.id, function(err, journalInvoice) {
    if (err) return next(err);
    res.send(journalInvoice);
  });
};

exports.createJournalInvoice = function(req, res) {
  let journalInvoice = new JournalInvoice(req.body);
  journalInvoice.save(function(err) {
    if (err) return next(err);
    res.send('Journal invoice created successfully');
  });
};

exports.updateJournalInvoice = function(req, res) {
  JournalInvoice.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, journalInvoice) {
      if (err) return next(err);
      res.send('Journal invoice updated successfully');
    }
  );
};
exports.deleteJournalInvoice = function(req, res) {
  JournalInvoice.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Journal invoice deleted successfully');
  });
};
