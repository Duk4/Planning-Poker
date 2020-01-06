const express = require('express');
const Participant = require('../../models/Participant');
const router = express.Router();

router.delete('/:participant', (req, res) => {
    let { participant } = req.params;

    Participant.destroy({ where: { participant } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
});

module.exports = router;