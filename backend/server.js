const express = require('express');

const db = require('./database');
const userRouter = require('./routes/userRoutes');
const sessionRouter = require('./routes/sessionRoutes');
const taskRouter = require('./routes/taskRoutes');
const participantRouter = require('./routes/participantRoutes');

const app = express();

// Checking the db connection
db.authenticate()
    .then(() => { console.log('Database loaded...') })
    .catch(err => console.log('Error: ' + err));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => { res.send('Hello World!') });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/sessions', sessionRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/participants', participantRouter);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));