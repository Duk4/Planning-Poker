const app = require('./app');
const db = require('./database');

// Checking the db connection
db.authenticate()
    .then(() => { console.log('Database loaded...') })
    .catch(err => console.log('Error: ' + err));

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));