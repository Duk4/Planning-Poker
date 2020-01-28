const Session = require('../../models/Session');

module.exports = (req, res) => {
    let { id } = req.params;

    Session.destroy({ where: { session_id: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};