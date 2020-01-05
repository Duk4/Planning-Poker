const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.get('/', (req, res) =>
    User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;