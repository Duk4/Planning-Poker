const express = require('express');
const userRouter = require('./routes/userRoutes');
const sessionRouter = require('./routes/sessionRoutes');
const taskRouter = require('./routes/taskRoutes');
const participantRouter = require('./routes/participantRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => { res.send('Hello World!') });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/sessions', sessionRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/participants', participantRouter);

module.exports = app;