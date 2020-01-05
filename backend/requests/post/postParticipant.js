const express = require('express');
const Participant = require('../../models/Participant');
const uuidv4 = require('uuid/v4');
const router = express.Router();

router.post('/', (req, res) => {
    Participant.create({
        participant: req.body.participant,
        session_id: req.body.session_id
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
});

module.exports = router;