const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.get('/:session_id', (req, res) => {
    let { session_id } = req.params
    Task.findAll({ where: { session_id } })
        .then(tasks => res.json(tasks))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;