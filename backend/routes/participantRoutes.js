const express = require('express');
const {
    participants,
    createParticipant,
    deleteParticipant,
    participantsBySession
} = require('../controllers/participantController');

const router = express.Router();

router
    .route('/')
    .get(participants)
    .post(createParticipant);

router
    .route('/:id')
    .get(participantsBySession)
    .delete(deleteParticipant);

module.exports = router;