const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

// Checking the db connection
db.authenticate()
    .then(() => { console.log('Database loaded...') })
    .catch(err => console.log('Error: ' + err));

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
app.use('/api/users', require('./requests/get/activeUsers'));
app.use('/api/users', require('./requests/get/deletedUsers'));
app.use('/api/users', require('./requests/get/userById'));
app.use('/api/users', require('./requests/post/postUser'));
app.use('/api/users/name', require('./requests/patch/updateName'));
app.use('/api/users/pw', require('./requests/patch/updatePassword'));
app.use('/api/users/status', require('./requests/patch/updateStatus'));
app.use('/api/users/last-entry', require('./requests/patch/updateLastEntry'));
app.use('/api/users', require('./requests/delete/deleteUser'));

app.use('/api/sessions', require('./requests/get/sessions'));
app.use('/api/sessions', require('./requests/get/sessionById'));
app.use('/api/sessions/admin', require('./requests/get/sessionsByAdminId'));
app.use('/api/sessions', require('./requests/post/postSession'));
app.use('/api/sessions/name', require('./requests/patch/updateSessionName'));
app.use('/api/sessions', require('./requests/delete/deleteSession'));

app.use('/api/tasks', require('./requests/get/tasks'));
app.use('/api/tasks', require('./requests/get/taskById'));
app.use('/api/tasks/session', require('./requests/get/tasksBySessionId'));
app.use('/api/tasks', require('./requests/post/postTask'));
app.use('/api/tasks/name', require('./requests/patch/updateTaskName'));
app.use('/api/tasks/value', require('./requests/patch/updateTaskValue'));
app.use('/api/tasks', require('./requests/delete/deleteTask'));

app.use('/api/participants', require('./requests/get/participants'));
app.use('/api/participants', require('./requests/get/participantsBySessionId'));
app.use('/api/participants', require('./requests/post/postParticipant'));
app.use('/api/participants', require('./requests/delete/deleteParticipant'));

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));