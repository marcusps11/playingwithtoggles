var Twitter = require('twitter');

var Client = new Twitter({
	consumer_key: 'fT9al20NXvS7EF7ZUUz4BG6D3',
	consumer_secret: 'Le5XSau4heyv539rkqFWjTb1w77m1UMZwtNq7mSK1ZAYurfMcw',
	access_token_key: '21439387-4N4UOTBNel3RLWXP42xVEiLRVv7I6exDJJgshPXWf',
	access_token_secret: 'MHYiywFf569xmsJBPsFgWle9rLOzrsKauf9wJ0mpWfBv1'
});


function getTweets(req, res) {
	Client.get('statuses/user_timeline', {user_id: 1052583974}, function(error, tweets) {
			if (error) {
			console.log(error);
		} else {
			console.log(tweets[0].text);
		}
		res.status(200).json({tweets: tweets[0].text});
	});
}


function getVideos(req, res) {
	
	Client.get('oembed', {url: "https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395"},
	 function(error, videos) {
			if (error) {
			console.log(error);
			console.log('hello')

		} else {
			console.log(videos);
		}
		res.json('hello');
	});
}



module.exports = {
	getTweets:   getTweets,
	getVideos: 	getVideos
};