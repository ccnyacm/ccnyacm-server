const functions = require('firebase-functions'),
    Express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    info = require('./controllers/info');
    events = require('./controllers/events')
    members = require('./controllers/members');
    
//initialized app
const app = Express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

//add middleware
app.use(bodyParser.urlencoded({ extended: false }));

//add routes
app.use('/info', info);
app.use('/events', events);
app.use('/members', members);

app.listen(process.env.PORT || 8081, () => console.log('Server is connected'))
