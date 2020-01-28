const Session = require('../../models/Session');

module.exports = (req, res) => {
    let { id } = req.params;
    Session.findByPk(id)
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
};