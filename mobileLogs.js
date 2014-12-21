///////////////////////////////////////////////////////////////
///  Log system for mobile apps
///////////////////////////////////////////////////////////////

var config = require('./config.js');

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var swig = require('swig');

/// Web-server get request
app.get('/',function (req, res) {
	res.end('Mobile log web server');
});

/// Web-server post request with log lines
app.post('/', function (req, res) {

	console.log(req.body);
	res.end('{reslt:true}');

});

/// Web-server
var server = app.listen(config.port, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('MobileLog application started at http://%s:%s', host, port)
})
