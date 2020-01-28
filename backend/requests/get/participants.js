const Participant = require('../../models/Participant');

module.exports = (req, res) => {
    Participant.findAll()
        .then(participants => res.send(participants))
        .catch(err => console.log('Error: ', err))
};