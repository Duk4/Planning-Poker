const express = require('express');
const bodyParser = require('body-parser');
const User = require('./User');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', User.readAll);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));