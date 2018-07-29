// Dependencies
var express = require('express'),
    router  = express.Router(),
    shortid = require('shortid'),
    http    = require("http");

const Op = require('sequelize').Op;
const Fn = require('sequelize').fn;
const Col = require('sequelize').col;

// Model
var Url = require('../models/url');

// GET && POST HTTP methods for root
router
    .route('/')
    .get((req, res)=>{
       Url.findAll({order: [['hits', 'DESC']], limit: 5})
       .then(urls=>{
           res.status(200).json(urls)
       })
    })
    .post((req, res)=>{
        request = http.request('http://'+req.body.url, () => {
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
        }).on('error', ()=>{
            res.status(405).json({error: 'The link ' + req.body.url + ' is not working! Try other URL'})
        })
        request.end();
    });

// GET Method for return hits count
router
    .route('/hits')
    .get((req, res)=>{
        Url.findAll({
            attributes: [[Fn('SUM', Col('hits')), 'hits']]
        }).then(hits=>{
            res.status(200).json(hits)
        }).catch(err=>{
            res.status(500).json({error: 'Query error!', err})
        })
    })

// GET && DELETE HTTP methods for shortLink
router
    .route('/:shortCode')
    .get((req, res)=>{
        Url.findOne({ where: {shortUrl: { [Op.like]: '%' + req.params.shortCode } } })
        .then(url => {
            return url.update({
                'hits': url.hits + 1
            })
        }).catch(()=>{
            res.status(404).json({error: 'Not found!'})
        }).then((url)=>{
            url.reload();
            res.status(200).json({url: url.url})
        }).catch(err=>{
            res.status(405).json({error: err.errors[0].message})
        })
    })
    .delete((req, res)=>{
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
