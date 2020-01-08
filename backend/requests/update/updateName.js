const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.put('/:user_id', (req, res) => {
    let { user_id } = req.params;

    User.findByPk(user_id)
        .then(user => user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
});

module.exports = router;