const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlBD = new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: shortId.generate
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlBD);