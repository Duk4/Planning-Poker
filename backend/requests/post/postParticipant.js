const Participant = require('../../models/Participant');

module.exports = (req, res) => {
    Participant.create({
        participant: req.body.participant,
        session_id: req.body.session_id
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
};