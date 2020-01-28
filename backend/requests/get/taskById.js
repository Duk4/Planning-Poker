const Task = require('../../models/Task');

module.exports = (req, res) => {
    let { id } = req.params;
    Task.findByPk(id)
        .then(task => res.json(task))
        .catch(err => console.log('Error: ', err))
};