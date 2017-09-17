var express = require('express');
var path = require('path');

port = process.argv[2] || 3000;

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res, next){
	res.render('index');
	return next();
});

app.listen(port);
console.log('Express server running on port ' + port);
