const User = require('../../models/User');

module.exports = (req, res) => {
    let { id } = req.params;

    User.findByPk(id)
        .then(user => user.update({ status_is: 'deleted' }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
};