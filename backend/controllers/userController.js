const User = require('../models/User');
const uuidv4 = require('uuid/v4');

exports.users = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log('Error: ', err))
};

exports.user = (req, res) => {
    let id = req.params.id;
    User.findByPk(id)
        .then(user => res.json(user))
        .catch(err => console.log('Error: ', err))
};

exports.createUser = (req, res) => {
    User.create({
        user_id: uuidv4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pw: req.body.pw,
        status_is: 'active'
    })
        .then((user) => res.json(user))
        .catch(err => res.send(err))
};

exports.updateUser = (req, res) => {
    let { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (req.body.status_is) {
                user.update({ status_is: req.body.status_is })
            } else if (req.body.last_entry) {
                user.update({ last_entry: req.body.last_entry })
            } else if (req.body.pw) {
                user.update({ pw: req.body.pw })
            } else if (req.body.first_name && req.body.last_name) {
                user.update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name
                })
            }
        })
        .then(user => res.json(user))
        .catch(err => res.send(err));
};

exports.deleteUser = (req, res) => {
    let { id } = req.params;

    User.findByPk(id)
        .then(user => user.update({ status_is: 'deleted' }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
};