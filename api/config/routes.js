var express = require('express');
var router 	= express.Router();

var barsController = require('../controllers/barsController');
var twitterController = require('../controllers/twitterController');
var instagramController = require('../controllers/instagramController');
router.route('/bars')
.post(barsController.barsCreate)
.get(barsController.barsIndex);

router.route('/twitter')
.get(twitterController.getTweets);



router.route('/instagram')
.get(instagramController.authorize_user);

router.route('/instagram/callback')
.get(instagramController.handleauth);

router.route('/videos')
	.get(twitterController.getVideos);


module.exports = router;