const Session = require('../../models/Session');
const uuidv4 = require('uuid/v4');

module.exports = (req, res) => {
    Session.create({
        session_id: uuidv4(),
        session_name: req.body.session_name,
        session_admin: req.body.session_admin
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
};