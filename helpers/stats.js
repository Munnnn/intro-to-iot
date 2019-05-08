var db	= require('../models');

exports.resetStats = function(req,res) {
	var blank = {
		'avgTemperature': 0,
		'avgHumidity': 0,
		'avgBrightness': 0,
		'timeInHot': 0,
		'timeInCold': 0,
		'timeInDry': 0,
		'timeInHumid': 0,
		'timeOn': 0,				
		'timeTotal': 0
	}

	db.Stats.fingOneAndUpdata({}, blank, {'new': true, upsert: true})
	.then (function(wipedStats) {
		res.json(wipedStats);
	})
	.catch( function(err) {
		res.send(err);
	});
}

exports.getStats = function(req, res) {
db.Stats.findOne({})
.then( function(stats) {
res.json(stats);
})
.catch( function(err) {
res.send(err);
});
}

exports.editStats = function(req, res) {
db.Stats.findOneAndUpdate({}, req.body, {'new': true, upsert: true})
.then( function(editedStats) {
res.json(editedStats);
})
.catch( function(err) {
res.send(err);
});
}