const express = require('express');

const routes = express.Router();
const UrlController = require('./controllers/UrlController');
routes.get('/api/urls', UrlController.index);
routes.get('/api/urls/:id', UrlController.show);
routes.post('/api/urls', UrlController.store);
routes.put('/api/urls/:id', UrlController.update);
routes.delete('/api/urls/:id', UrlController.destroy);
routes.get('/:shortUrl', UrlController.redirect);

module.exports = routes;    