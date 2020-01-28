const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.patch('/:user_id', (req, res) => {
    let { user_id } = req.params;

    User.findByPk(user_id)
        .then(user => user.update({ last_entry: req.body.last_entry }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
});

module.exports = router;