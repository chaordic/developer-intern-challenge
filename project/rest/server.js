// Dependencies.
var express = require('express');
var bodyParser = require('body-parser');

// Start express server instance
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Declaration of root route
app.use('/', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');