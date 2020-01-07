const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.delete('/:task_id', (req, res) => {
    let { task_id } = req.params;

    Task.destroy({ where: { task_id } })
        .then(() => res.status(204).send())
        .catch(err => res.send(err))
});

module.exports = router;