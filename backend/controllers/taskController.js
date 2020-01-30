const Task = require('../models/Task');
const uuidv4 = require('uuid/v4');

exports.tasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.task = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        res.json(task);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.tasksBySession = async (req, res) => {
    try {
        const { session_id } = req.params;
        const tasks = await Task.findAll({ where: { session_id } });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.createTask = async (req, res) => {
    try {
        const task = {
            task_id: uuidv4(),
            task_name: req.body.task_name,
            task_value: req.body.task_value,
            session_id: req.body.session_id
        };
        await Task.create(task);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

function parseUserRequestBody(body) {
    const {
        task_value,
        task_name
    } = body;

    if (task_value) return { task_value };
    if (task_name) return { task_name };

    throw new Error('Invalid Request');
};

exports.updateTask = async (req, res) => {
    try {
        const updateObj = parseUserRequestBody(req.body);
        const { id } = req.params;
        const task = await Task.findByPk(id);
        await task.update(updateObj);
        res.status(202).json(task);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({ where: { task_id: id } });
        res.status(204).send("Task deleted...");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};