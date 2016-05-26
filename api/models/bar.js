var mongoose = require('mongoose');

var barSchema = new mongoose.Schema({
	name: {type: String},
	description: {type: String},
	image: {type: String},
	address: String,
	website: String,
	lat: Number,
	lng: Number,
	keg: String
});

module.exports = mongoose.model('Bar', barSchema);