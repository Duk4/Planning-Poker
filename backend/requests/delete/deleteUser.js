const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.delete('/:user_id', (req, res) => {
    let { user_id } = req.params;

    User.findByPk(user_id)
        .then(task => task.update({ status_is: 'deleted' }))
        .then(user => res.json(user))
        .catch(err => res.send(err));
});

module.exports = router;