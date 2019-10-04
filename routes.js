const express = require('express');
const router = express.Router();
const newController = require('./controllers/new.controller');

router.get('/tecnologia', (request, response) => {
    newController.handleRequestNews(request, response, '/economia/tecnologia')
});

router.get('/carros', (request, response) => {
    newController.handleRequestNews(request, response, '/carros');
});

module.exports = router;


