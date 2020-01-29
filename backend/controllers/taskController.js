const Task = require('../models/Task');
const uuidv4 = require('uuid/v4');

exports.tasks = (req, res) => {
    Task.findAll()
        .then(tasks => res.send(tasks))
        .catch(err => console.log('Error: ', err))
};

exports.task = (req, res) => {
    let { id } = req.params;
    Task.findByPk(id)
        .then(task => res.json(task))
        .catch(err => console.log('Error: ', err))
};

exports.tasksBySession = (req, res) => {
    let { session_id } = req.params
    Task.findAll({ where: { session_id } })
        .then(tasks => res.json(tasks))
        .catch(err => console.log('Error: ', err))
};

exports.createTask = (req, res) => {
    Task.create({
        task_id: uuidv4(),
        task_name: req.body.task_name,
        task_value: req.body.task_value,
        session_id: req.body.session_id
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
};

exports.updateTask = (req, res) => {
    let { id } = req.params;
    Task.findByPk(id)
        .then(task => {
            if (req.body.task_value) {
                task.update({ task_value: req.body.task_value });
            } else if (req.body.task_name) {
                task.update({ task_name: req.body.task_name })
            }
        })
        .then(task => res.json(task))
        .catch(err => res.send(err));
};

exports.deleteTask = (req, res) => {
    let { id } = req.params;
    Task.destroy({ where: { task_id: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};