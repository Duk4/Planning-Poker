const express = require('express');
const User = require('../../models/User');
const uuidv4 = require('uuid/v4');
const router = express.Router();

router.post('/', (req, res) => {
    User.create({
        user_id: uuidv4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pw: req.body.pw
    })
        .then((user) => res.json(user))
        .catch(err => res.send(err))
});

module.exports = router;