var express = require('express');
var router 	= express.Router();

var barsController = require('../controllers/barsController');
var twitterController = require('../controllers/twitterController');


router.route('/bars')
	.post(barsController.barsCreate)
	.get(barsController.barsIndex);

router.route('/tweets')
	.get(twitterController.getTweets);

	module.exports = router;