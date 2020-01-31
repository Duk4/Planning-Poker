const Task = require('../models/Task');
const uuidv4 = require('uuid/v4');
const catchAsync = require('../utils/catchAsync');

exports.tasks = catchAsync(async (req, res, next) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

exports.task = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
});

exports.tasksBySession = catchAsync(async (req, res, next) => {
    const { session_id } = req.params;
    const tasks = await Task.findAll({ where: { session_id } });
    res.json(tasks);
});

exports.createTask = catchAsync(async (req, res, next) => {
    const task = {
        task_id: uuidv4(),
        task_name: req.body.task_name,
        task_value: req.body.task_value,
        session_id: req.body.session_id
    };
    await Task.create(task);
    res.status(201).json(task);
});

function parseUserRequestBody(body) {
    const {
        task_value,
        task_name
    } = body;

    if (task_value) return { task_value };
    if (task_name) return { task_name };

    throw new Error('Invalid Request');
};

exports.updateTask = catchAsync(async (req, res, next) => {
    const updateObj = parseUserRequestBody(req.body);
    const { id } = req.params;
    const task = await Task.findByPk(id);
    await task.update(updateObj);
    res.status(202).json(task);
});

exports.deleteTask = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    await Task.destroy({ where: { task_id: id } });
    res.status(204).send("Task deleted...");
});