var express 				= require('express');
var cors          	= require('cors');
var path            = require('path');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var methodOverride  = require("method-override");
var app 						= express();

var Bar           = require('./models/bar');


var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost/wagwan';
mongoose.connect(databaseURL, function(err){
  if(err){
    console.log(err);
  }
}); 


app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

var routes = require('./config/routes');

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});


app.use("/api", routes);

app.listen(process.env.PORT || 3000 );
