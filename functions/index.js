const functions = require('firebase-functions'),
    Express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    info = require('./controllers/info');

//initialized app
const app = Express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

//add middleware
app.use(bodyParser.urlencoded({ extended: false }));

//add routes
app.use('/info', info);

// // Create and Deploy Your First Cloud Functions

exports.ccnyacm = functions.https.onRequest(app);
