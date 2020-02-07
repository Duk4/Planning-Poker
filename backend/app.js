const express = require('express');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const sessionRouter = require('./routes/sessionRoutes');
const taskRouter = require('./routes/taskRoutes');
const participantRouter = require('./routes/participantRoutes');

const app = express();

// Middleware
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
    // req.requestTime = new Date().toISOString();
    // console.log(req.headers);
    next();
});

// Routes
app.get('/', (req, res) => { res.send('Hello World!') });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/sessions', sessionRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/participants', participantRouter);

// Middleware handling unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;