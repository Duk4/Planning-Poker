const Participant = require('../../models/Participant');

module.exports = (req, res) => {
    let { id } = req.params;
    Participant.findAll({ where: { session_id: id } })
        .then(participants => res.send(participants))
        .catch(err => console.log('Error: ', err))
};