const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.get('/', (req, res) =>
    Task.findAll()
        .then(tasks => res.send(tasks))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;