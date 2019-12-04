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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Users routes
app.use('/users', require('./routes/users'));
app.use('/sessions', require('./routes/sessions'));
app.use('/tasks', require('./routes/tasks'));
app.use('/participants', require('./routes/participants'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));