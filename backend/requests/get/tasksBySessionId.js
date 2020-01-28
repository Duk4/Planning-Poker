const Task = require('../../models/Task');

module.exports = (req, res) => {
    let { session_id } = req.params

    Task.findAll({ where: { session_id } })
        .then(tasks => res.json(tasks))
        .catch(err => console.log('Error: ', err))
};