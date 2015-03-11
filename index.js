// declare dependencies
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');


// configurations
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('./config/db')(mongoose); /* database configuration */ 


// routes
require('./routes')(app);


// start app
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Listening to port ' + port);
})