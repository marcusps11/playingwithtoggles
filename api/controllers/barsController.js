var Bar = require('../models/bar');

function barsIndex(req, res) {
	console.log('hello');
	Bar.find(function(err, bars) {
		if(err) 
			return res.status(404).json({message: 'Somethign went wrong'});
		res.status(200).json({ bars: bars});
	});
}

function barsCreate(req, res) {
	var barParams = req.body;
	var bar = new Bar(barParams);

	bar.save(function(err) {
		if(err)
			return res.render('error', {message :'SOmething went wrong'});
		return res.status(201).json({ message: 'Bar created', bar: bar });
	});
}

function barsShow(req, res) {
	Bar.findById(req.params.id, function(err, bar) {
		if (err)
			return res.status(404).json({message: 'Somethign went wrong'});
		res.status(200).json({bar: bar});
	});
}

function barsUpdate(req, res){
  Bar.findById(req.params.id, function(err, bar) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!bar) return res.status(404).json({message: 'No bar found.'});
    if (req.body.name) bar.name = req.body.name;
    if (req.body.description) bar.description = req.body.description;
    if (req.body.image) bar.image = req.body.image;
    if (req.body.address) bar.address = req.body.address;
    if (req.body.lat) bar.lat = req.body.lat;
    if (req.body.lng) bar.lng = req.body.lng;

    bar.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'bar successfully updated.', bar: bar});
    });
  });
}

function barsDelete(req, res) {
	Bar.findByIdAndRemove({_id: req.params.id}, function(err) {
		if (err)
			return res.status(404).json({message: 'Something went wrong'});
		res.status(200).json({message: 'bar deleted'});
	});
}

module.exports = {
  barsIndex:   barsIndex,
  barsCreate:  barsCreate,
  barsShow:    barsShow,
  barsUpdate:  barsUpdate,
  barsDelete:  barsDelete
};