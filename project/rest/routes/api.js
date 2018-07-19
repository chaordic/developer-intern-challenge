// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Url = require('../models/url');

router.get('/', function(req, res){
    res.send('api is working');
});

router.get('/:shortCode', function(req, res){
    res.send('shortcode is ' + req.params.shortCode);
});

router.post('/', function(req, res){
    res.send('shortcode is ' + req.params.shortCode);
});

// Return router
module.exports = router;