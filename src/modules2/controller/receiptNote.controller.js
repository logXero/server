exports.getReceiptNote = function(req, res) {
  ReceiptNote.findById(req.params.id, function(err, receiptNote) {
    if (err) return next(err);
    res.send(receiptNote);
  });
};

exports.createReceiptNote = function(req, res) {
  let receiptNote = new ReceiptNote(req.body);
  receiptNote.save(function(err) {
    if (err) return next(err);
    res.send('Receipt note created successfully');
  });
};

exports.updateReceiptNote = function(req, res) {
  ReceiptNote.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, receiptNote) {
      if (err) return next(err);
      res.send('Receipt note updated successfully');
    }
  );
};

exports.deleteReceiptNote = function(req, res) {
  ReceiptNote.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Receipt note deleted successfully');
  });
};