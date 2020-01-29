const express = require('express');
const {
    participants,
    createParticipant,
    participantsBySession,
    deleteParticipant
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