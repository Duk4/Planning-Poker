// Uncaught exceptions
process.on('uncaughtException', err => {
    console.log("UNCAUGHT EXCEPTION! Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');
const db = require('./database');

// Checking the db connection
db.authenticate()
    .then(() => { console.log('Database loaded...') })
    .catch(err => console.log('Error: ' + err));

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

// Unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log("UNHANDLED REJECTION! Shutting down...");
    server.close(() => {
        process.exit(1);
    });
});