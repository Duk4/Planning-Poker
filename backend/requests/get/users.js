const User = require('../../models/User');

module.exports = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log('Error: ', err))
};