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
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/participants', require('./routes/participants'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));