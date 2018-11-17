const mongoose = require('mongoose');
const shortid = require('shortid');
const mongoosePaginate = require('mongoose-paginate');
const UrlSchema = new mongoose.Schema({
    id: {
        type: String,
        default: shortid.generate,
        required: true
        
    },
    hits: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
});

UrlSchema.plugin(mongoosePaginate);

mongoose.model('Url', UrlSchema);