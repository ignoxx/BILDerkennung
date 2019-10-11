const port = process.env.PORT || 80;
const express = require('express');
const webserver = express();
const classifier = require('./src/classifier')
const bodyParser = require('body-parser');

webserver.use(bodyParser.urlencoded({ extended: true }));


function serveIndex(request, response) {
    response.sendFile(__dirname + '/static/index.html')
}

webserver.get('/', serveIndex);
webserver.post('/api/classify', classifier.handle);
webserver.listen(port, () => console.log("Running on port..", port));


