const Session = require('../../models/Session');

module.exports = (req, res) => {
    Session.findAll()
        .then(sessions => res.send(sessions))
        .catch(err => console.log('Error: ', err))
};