const mongoose = require('mongoose');
const Url = mongoose.model('Url');

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query;
        const urls = await Url.paginate({}, { page, limit: 20 });
        return res.json(urls);
    },
    async store(req, res) {
        const url = await Url.create(req.body);
        return res.json(url);
    },
    async show(req, res) {
        const url = await Url.findById(req.params.id);
        return res.json(url);
    },
    async update(req, res) {
        const url = await Url.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(url);
    },
    async destroy(req, res) {
        await Url.findByIdAndRemove(req.params.id);
        return res.send();
    },
    async redirect(req, res) {
        const url = await Url.findOne({shortUrl: 'http://chr.dc' + req.url});
        return res.redirect(url.url);
        
    }
};