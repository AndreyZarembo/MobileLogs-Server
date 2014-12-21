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

	res.end(
		swig.renderFile('pages/apps.html.tpl', {
			breadCrumbs: [{
					url		: '/',
					title	: 'Mobile Logs'
				},{
					url		: '/',
					title	: 'Applications',
					active: true
				}
			]
		})
	);
});

/// Web-server post request with log lines
app.post('/', function (req, res) {

	console.log(req.body);
	res.end('{reslt:true}');
});

/// jQuery
app.use('/js/jquery.min.js',express.static(__dirname+'/jquery/jquery-2.1.3.min.js'));

/// Twitter bootstrap
app.use('/css/bootstrap.min.css',express.static(__dirname+'/bootstrap/css/bootstrap.min.css'));
app.use('/js/bootstrap.min.js',express.static(__dirname+'/bootstrap/js/bootstrap.min.js'));

/// Default
app.use('/css/main.css',express.static(__dirname+'/css/main.css'));

/// Web-server
var server = app.listen(config.port, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('MobileLog application started at http://%s:%s', host, port)
})
