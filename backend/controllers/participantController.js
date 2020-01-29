const Participant = require('../models/Participant');

exports.participants = (req, res) => {
    Participant.findAll()
        .then(participants => res.send(participants))
        .catch(err => console.log('Error: ', err))
};

exports.participantsBySession = (req, res) => {
    let { id } = req.params;
    Participant.findAll({ where: { session_id: id } })
        .then(participants => res.send(participants))
        .catch(err => console.log('Error: ', err))
};

exports.createParticipant = (req, res) => {
    Participant.create({
        participant: req.body.participant,
        session_id: req.body.session_id
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
};

exports.deleteParticipant = (req, res) => {
    let { id } = req.params;
    Participant.destroy({ where: { participant: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};