const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);

routes.get('/search', SearchController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;