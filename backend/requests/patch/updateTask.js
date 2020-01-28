const Task = require('../../models/Task');

module.exports = (req, res) => {
    let { id } = req.params;

    if (req.body.task_value) {
        Task.findByPk(id)
            .then(task => task.update({ task_value: req.body.task_value }))
            .then(task => res.json(task))
            .catch(err => res.send(err));
    } else if (req.body.task_name) {
        Task.findByPk(id)
            .then(task => task.update({ task_name: req.body.task_name }))
            .then(task => res.json(task))
            .catch(err => res.send(err));
    }
};