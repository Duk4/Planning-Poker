const express = require('express');
const db = require('../database');
const Participant = require('../models/Participant');
const router = express.Router();

router.get('/', (req, res) =>
    Participant.findAll()
        .then(participants => console.log(participants))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;