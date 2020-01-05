const express = require('express');
const Participant = require('../../models/Participant');
const router = express.Router();

router.get('/:session_id', (req, res) => {
    let { session_id } = req.params;
    Participant.findAll({ where: { session_id } })
        .then(participants => res.send(participants))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;