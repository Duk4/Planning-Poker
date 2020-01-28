const User = require('../../models/User');

module.exports = (req, res) => {
    let { id } = req.params;

    if (req.params.status_is) {
        User.findByPk(id)
            .then(user => user.update({ status_is: req.body.status_is }))
            .then(user => res.json(user))
            .catch(err => res.send(err));
    } else if (req.body.last_entry) {
        User.findByPk(id)
            .then(user => user.update({ last_entry: req.body.last_entry }))
            .then(user => res.json(user))
            .catch(err => res.send(err));
    } else if (req.body.pw) {
        User.findByPk(id)
            .then(user => user.update({ pw: req.body.pw }))
            .then(user => res.json(user))
            .catch(err => res.send(err));
    } else if (req.body.first_name && req.body.last_name) {
        User.findByPk(id)
            .then(user => user.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name
            }))
            .then(user => res.json(user))
            .catch(err => res.send(err));
    }
};