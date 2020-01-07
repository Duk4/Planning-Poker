const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.get('/deleted', (req, res) =>
    User.findAll({ where: { status_is: 'deleted' } })
        .then(users => res.json(users))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;