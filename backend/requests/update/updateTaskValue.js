const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.put('/:task_id', (req, res) => {
    let { task_id } = req.params;

    Task.findByPk(task_id)
        .then(task => task.update({ task_value: req.body.task_value }))
        .then(task => res.json(task))
        .catch(err => res.send(err));
});

module.exports = router;