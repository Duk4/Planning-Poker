const express = require('express');
const db = require('../database');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) =>
    User.findAll()
        .then(users => console.log(users))
        .catch(err => console.log('Error: ', err))
);

module.exports = router;