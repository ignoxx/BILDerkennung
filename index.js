const port = 80;
const express = require('express');
const webserver = express();
const Classifier = require('./Classifier')
const bodyParser = require('body-parser');
webserver.use(bodyParser.urlencoded({ extended: true }));

// / -> returns index.html
// /api (text)-> returns BILD: true | false
// /api/classify -> classifies text

//konfigurieren


function serveIndex(request, response){
response.sendFile(__dirname + '/index.html')
}



webserver.get('/', serveIndex);
webserver.post('/api/classify', Classifier.handle);
webserver.listen(port);


