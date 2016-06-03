var request = require('request');
var Instagram = require('instagram-node').instagram();

Instagram.use({ client_id: 'c571c6e1a6274323bbf9d90613f03f7c',
         			client_secret: '7056aa7f2ef24f1286c943359d0a3c98' });

var baseURL = 'https://api.instagram.com/oauth/authorize';
var redirect_uri = 'http://localhost:3000/api/instagram/callback';

function authorize_user(req, res) {
	res.redirect(Instagram.get_authorization_url(redirect_uri));
}

function handleauth(req, res) {
	console.log('hello');
	Instagram.authorize_user(req.query.code, redirect_uri, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
			res.send();
		}
	});
} 

// function instagram (req, res) {
// 	var authorize = `${baseURL}?client_id=${client_id}&redirect_uri=${redirectUri}&response_type=code`;
// 	res.redirect(authorize);

// }


// function processAuthorizeCallback (req, res) {
// 	var authorization_code = req.query.code;
// 	console.log(req.query.code)
// 	var authorizationURL = 'https://api.instagram.com/oauth/access_token';

// 	console.log('clientId', client_id);

// 	var oauthParams = {
// 		client_id: client_id,
// 		client_secret: client_secret,
// 		grant_type: 'authorization_code',
// 		redirect_uri: redirectUri,
// 		code: authorization_code
// 	};

// request.post({url: authorizationURL, oauth: oauthParams}, function(err, res, body) {
// 	console.log(body);
// });

// request({
// 	method: 'POST',
// 	url: authorizationURL,
// 	qs: oauthParams
// }, function(err, response, body) {
// 	if (err) {
// 		console.log(err, '<< something went wrong');
// 	} else {
// 		console.log(body);
// 	}
// });

// 	res.send();
// }



module.exports = {
	authorize_user:  authorize_user,
	handleauth: handleauth
};