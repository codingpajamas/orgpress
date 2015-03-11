var express = require('express');
var router = express.Router();
var Store = require('../models/store');

router.get('/', function(req, res){ 
	Store.find({},{},{}, function(err, stores){
		if(!err){
			res.render('stores/index.jade', {});
		} else {
			res.send(err);
		}
	});
});

module.exports = router;