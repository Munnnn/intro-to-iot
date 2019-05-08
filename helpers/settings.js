var db = require('../models');

exports.getSettings = function(req, res) {
	db.Data.findOne({})
	.then( function(settings) {
		res.json(settings);
	})
	.catach( function(err) {
		res.send(err);
	})
}

exports.editSettings = function(req, res) {
	db.Data.findOneAndUpdate({}, req.body, {'new': true, upsert: true})
	.then (function(editedSettings) {
		res.json(editedSettings);
	})
	.catch( function(err) {
		res.send(err);
	});
}