const Session = require('../../models/Session');

module.exports = (req, res) => {
    let { session_admin } = req.params;
    Session.findAll({ where: { session_admin: session_admin } })
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
};