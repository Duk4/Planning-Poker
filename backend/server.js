const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));