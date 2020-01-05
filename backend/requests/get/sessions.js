const express = require('express');
const Session = require('../../models/Session');
const router = express.Router();

router.get('/', (req, res) =>
    Session.findAll()
        .then(sessions => res.send(sessions))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;