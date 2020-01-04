const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

router.get('/:session_id', (req, res) => {
    let { session_id } = req.params
    Session.findByPk(session_id)
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;