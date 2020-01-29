const Session = require('../models/Session');
const uuidv4 = require('uuid/v4');

exports.sessions = (req, res) => {
    Session.findAll()
        .then(sessions => res.send(sessions))
        .catch(err => console.log('Error: ', err))
};

exports.session = (req, res) => {
    let { id } = req.params;
    Session.findByPk(id)
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
};

exports.sessionAdmin = (req, res) => {
    let { session_admin } = req.params;
    Session.findAll({ where: { session_admin: session_admin } })
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
};

exports.createSession = (req, res) => {
    Session.create({
        session_id: uuidv4(),
        session_name: req.body.session_name,
        session_admin: req.body.session_admin
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
};

exports.updateSession = (req, res) => {
    let { id } = req.params;
    Session.findByPk(id)
        .then(session => session.update({ session_name: req.body.id }))
        .then(session => res.json(session))
        .catch(err => res.send(err));
};

exports.deleteSession = (req, res) => {
    let { id } = req.params;
    Session.destroy({ where: { session_id: id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
};