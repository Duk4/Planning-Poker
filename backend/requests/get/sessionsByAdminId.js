const express = require('express');
const Session = require('../../models/Session');
const router = express.Router();

router.get('/:session_admin', (req, res) => {
    let { session_admin } = req.params;
    Session.findAll({ where: { session_admin: session_admin } })
        .then(session => res.json(session))
        .catch(err => console.log('Error: ', err))
});

module.exports = router;