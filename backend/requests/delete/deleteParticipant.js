const Participant = require('../../models/Participant');

module.exports = (req, res) => {
    let { id } = req.params;

    Participant.destroy({ where: { participant: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};