const express = require('express');
const {
    tasks,
    createTask,
    task,
    updateTask,
    deleteTask,
    tasksBySession
} = require('../controllers/taskController');

const router = express.Router();

router
    .route('/')
    .get(tasks)
    .post(createTask);

router
    .route('/:id')
    .get(task)
    .patch(updateTask)
    .delete(deleteTask);

router
    .route('/session/:session_id')
    .get(tasksBySession);

module.exports = router;