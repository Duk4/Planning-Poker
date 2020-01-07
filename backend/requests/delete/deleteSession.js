const express = require('express');
const Session = require('../../models/Session');
const router = express.Router();

router.delete('/:session_id', (req, res) => {
    let { session_id } = req.params;

    Session.destroy({ where: { session_id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
});

module.exports = router;