const express = require('express');
const {
    tasks,
    createTask,
    task,
    updateTask,
    deleteTask
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

module.exports = router;