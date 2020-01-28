const express = require('express');

const tasks = require('../requests/get/tasks');
const createTask = require('../requests/post/postTask');

const task = require('../requests/get/taskById');
const updateTask = require('../requests/patch/updateTask');
const deleteTask = require('../requests/delete/deleteTask');

const tasksBySession = require('../requests/get/tasksBySessionId');

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