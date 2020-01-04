const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/:user_id', (req, res) => {
    let { user_id } = req.params
    User.findByPk(user_id)
        .then(user => res.json(user))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;