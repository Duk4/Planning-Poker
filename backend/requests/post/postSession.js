const express = require('express');
const Session = require('../../models/Session');
const uuidv4 = require('uuid/v4');
const router = express.Router();

router.post('/', (req, res) => {
    Session.create({
        session_id: uuidv4(),
        session_name: req.body.session_name,
        session_admin: req.body.session_admin
    })
        .then((session) => res.json(session))
        .catch(err => res.send(err))
});

module.exports = router;