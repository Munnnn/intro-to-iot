var express = require('express'),
	db = require('../models');

exports.getData = function(req, res) {
	db.Data.find()
	.then( function(data) {
		res.json(data);
	})
	.catch( function(err) {
		res.send(err);
	})
}

exports.createData = function(req, res) {
	db.Data.create(req.body)
	.then (function(newData) {
		// res.json( { message: 'creaating data'})
		res.json(newData);
	})
	.catch (function(err) {
		// res.json( { message: 'error'})

		res.send(err);
	});
}

exports.deleteData = function(req, res) {
	db.Data.remove({})
	.then (function() {
		res.json({message: 'Data wiped' });
	})
	.catch (function(err) {
		res.send(err);
	});
}

exports.getOneDate = function(req, res) {
	db.Data.findById(req.params.id)
	.then (function(foundData) {
		res.json(foundData);
	})
	.catch( function(err) {
		res.send(err);
	});
}

exports.editData = function(req, res) {
	db.Data.findOneAndUpdate({ _id: req.params.id}, req.body, {'new': true, upsert: true})
	.then (function(editedData) {
		res.json(editedData);
	})
	.catch( function(err) {
		res.send(err);
	});
}

exports.delectOneData = function(req, res) {
	db.Data.remove( {_id: req.params.id})
	.then ( function() {
		res.json( { message: 'Succesfully deleted'})
	})
	.catch( function(err) {
		res.send(err);
	});
}