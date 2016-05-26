var express = require('express');
var router 	= express.Router();

var barsController = require('../controllers/barsController');

router.route('/bars')
	.post(barsController.barsCreate)
	.get(barsController.barsIndex);

	module.exports = router;