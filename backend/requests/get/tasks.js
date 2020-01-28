const Task = require('../../models/Task');

module.exports = (req, res) => {
    Task.findAll()
        .then(tasks => res.send(tasks))
        .catch(err => console.log('Error: ', err))
};