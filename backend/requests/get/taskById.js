const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.get('/:task_id', (req, res) => {
    let { task_id } = req.params
    Task.findByPk(task_id)
        .then(task => res.json(task))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;