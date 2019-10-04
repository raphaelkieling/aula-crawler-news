const express = require('express');
const routes = require('./routes');
const server = express();
const PORT = 3000;

/**
 * Endpoint
 */
server.get('/', function (request, response) {
    const messageToSend = {
        message: 'Welcome my friend'
    };

    response.status(200).send(messageToSend);
});

server.use('/news', routes)


/**
 * Init the server on defined port
 */
server.listen(PORT, function () {
    console.log(`🚀[server] running on ${PORT}`);
});