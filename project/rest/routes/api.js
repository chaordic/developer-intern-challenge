// Dependencies
var express = require('express'),
    router  = express.Router(),
    shortid = require('shortid'),
    http    = require("http");

const Op = require('sequelize').Op;

// Model
var Url = require('../models/url');

// GET && POST HTTP methods for root
router
    .route('/')
    .get(function(req, res){
       Url.findAll().then(urls=>{
           res.status(200).json(urls)
       })
    })
    .post(function(req, res){
        options = {method: 'HEAD', host: 'http://'+req.body.url, port: 80, path: '/'},
        http.request(options, function(r) {
            if(r.statusCode >= 200 && r.statusCode <= 400)
                Url.create({
                    url: req.body.url,
                    hits: 0,
                    shortUrl: "http://chr.dc/" + shortid.generate()
                }).then(url=>{
                    res.status(200).json({shortUrl: url.shortUrl})
                }).catch(err=>{
                    res.status(405).json({
                        error: err.errors[0].message
                    })
                })
            res.status(405).json({error: 'Invalid link, check if ' + req.body.url + ' exists'})
    });

// GET && DELETE HTTP methods for shortLink
router
    .route('/:shortCode')
    .get(function(req, res){
        Url.findOne({ where: {shortUrl: { [Op.like]: '%' + req.params.shortCode } } }).then(url => {
            if(url)
                res.status(200).json({url: url.url})
            res.status(404).json({error: 'Not found'})    
        }).catch(err=>{
            res.status(405).json({error: err.errors[0].message})
        })
    })
    .delete(function(req, res){
        Url.destroy({ where: {shortUrl: { [Op.like]: '%' + req.params.shortCode } } }).then(url => {
            if(url)
                res.status(200).json({success: 'The shortlink http://chr.dc/' + req.params.shortCode + ' has successfully deleted'})
            res.status(404).json({error: 'Not found'})    
        }).catch(err=>{
            res.status(405).json({error: err.errors[0].message})
        })
    });

// Return router
module.exports = router;