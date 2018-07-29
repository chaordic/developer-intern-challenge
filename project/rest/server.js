// Dependencies.
var express = require('express');
var bodyParser = require('body-parser');

// Start express server instance
var app = express();

// Set port
app.set('port', process.env.PORT || 8080);

// Set Content-Type
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Declaration of root route
app.use('/', require('./routes/api'));

// Start server
app.listen(app.get('port'));
console.log('API is running on port: '+app.get('port'));