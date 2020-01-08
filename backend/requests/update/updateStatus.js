const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.put('/:user_id', (req, res) => {
    let { user_id } = req.params;

    User.findByPk(user_id)
        .then(user => user.update({ status_is: req.body.status_is }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
});

module.exports = router;