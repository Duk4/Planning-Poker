const Task = require('../models/Task');
const uuidv4 = require('uuid/v4');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.tasks = catchAsync(async (req, res, next) => {
    const tasks = await Task.findAll({ where: req.query });
    res.json(tasks);
});

exports.task = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
        return next(new AppError('Task with that ID does not exist!', 404));
    }

    res.json(task);
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

    if (!task) {
        return next(new AppError('Task with that ID does not exist!', 404));
    }

    await task.update(updateObj);
    res.status(202).json(task);
});

exports.deleteTask = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const task = Task.findAll({ where: { task_id: id } });

    if (!task) {
        return next(new AppError('Task with that ID does not exist!', 404));
    }

    await Task.destroy({ where: { task_id: id } });
    res.status(204).send("Task deleted...");
});