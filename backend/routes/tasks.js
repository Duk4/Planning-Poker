const express = require('express');
const db = require('../database');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', (req, res) =>
    Task.findAll()
        .then(tasks => console.log(tasks))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;