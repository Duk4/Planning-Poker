const Task = require('../../models/Task');

module.exports = (req, res) => {
    let { id } = req.params;

    Task.destroy({ where: { task_id: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};