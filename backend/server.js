const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

// Checking the db connection
db.authenticate()
    .then(() => { console.log('Works...') })
    .catch(err => console.log('Error' + err));

// Body parser middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Routes
app.get('/', (req, res) => { res.send('Hello World!') });
app.use('/api/users', require('./requests/get/users'));
app.use('/api/users', require('./requests/get/userById'));
app.use('/api/users', require('./requests/post/postUser'));
app.use('/api/sessions', require('./requests/get/sessions'));
app.use('/api/sessions', require('./requests/get/sessionById'));
app.use('/api/sessions', require('./requests/post/postSession'));
app.use('/api/tasks', require('./requests/get/tasks'));
app.use('/api/tasks', require('./requests/get/taskById'));
app.use('/api/tasks', require('./requests/post/postTask'));
app.use('/api/participants', require('./requests/get/participants'));
app.use('/api/participants', require('./requests/get/participantsBySessionId'));
app.use('/api/participants', require('./requests/post/postParticipant'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));