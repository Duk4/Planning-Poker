const express = require('express');
const Task = require('../../models/Task');
const uuidv4 = require('uuid/v4');
const router = express.Router();

router.post('/', (req, res) => {
    Task.create({
        task_id: uuidv4(),
        task_name: req.body.task_name,
        task_value: req.body.task_value,
        session_id: req.body.session_id
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
});

module.exports = router;