exports.getItemsDetails = function(req, res) {
  ItemsDetails.findById(req.params.id, function(err, itemsDetails) {
    if (err) return next(err);
    res.send(itemsDetails);
  });
};

exports.createItemsDetails = function(req, res) {
  let itemsDetails = new ItemsDetails(req.body);
  itemsDetails.save(function(err) {
    if (err) return next(err);
    res.send('Items details created successfully');
  });
};

exports.updateItemsDetails = function(req, res) {
  ItemsDetails.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function(err, itemsDetails) {
      if (err) return next(err);
      res.send('Items details updated successfully');
    }
  );
};

exports.deleteItemsDetails = function(req, res) {
  ItemsDetails.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Items details deleted successfully');
  });
};