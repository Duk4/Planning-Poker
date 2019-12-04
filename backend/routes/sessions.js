const express = require('express');
const db = require('../database');
const Session = require('../models/Session');
const router = express.Router();

router.get('/', (req, res) =>
    Session.findAll()
        .then(sessions => console.log(sessions))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;