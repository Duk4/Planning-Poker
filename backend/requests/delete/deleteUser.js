const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.delete('/:user_id', (req, res) => {
    let { user_id } = req.params;

    User.destroy({ where: { user_id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
});

module.exports = router;