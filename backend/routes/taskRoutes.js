const express = require('express');
const {
    tasks,
    createTask,
    task,
    updateTask,
    deleteTask
} = require('../controllers/taskController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(protect, tasks)
    .post(protect, createTask);

router
    .route('/:id')
    .get(protect, task)
    .patch(protect, updateTask)
    .delete(protect, deleteTask);

module.exports = router;