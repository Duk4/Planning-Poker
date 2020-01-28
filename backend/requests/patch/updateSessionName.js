const Session = require('../../models/Session');

module.exports = (req, res) => {
    let { id } = req.params;

    Session.findByPk(id)
        .then(session => session.update({ session_name: req.body.id }))
        .then(session => res.json(session))
        .catch(err => res.send(err));
};