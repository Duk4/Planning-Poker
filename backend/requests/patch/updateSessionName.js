const express = require('express');
const Session = require('../../models/Session');
const router = express.Router();

router.patch('/:session_id', (req, res) => {
    let { session_id } = req.params;

    Session.findByPk(session_id)
        .then(session => session.update({ session_name: req.body.session_name }))
        .then(session => res.json(session))
        .catch(err => res.send(err));
});

module.exports = router;