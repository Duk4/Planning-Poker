const User = require('../../models/User');

module.exports = (req, res) => {
    let id = req.params.id;

    User.findByPk(id)
        .then(user => res.json(user))
        .catch(err => console.log('Error: ', err))
};