const express = require('express');
const {
    participants,
    createParticipant,
    deleteParticipant,
    participantsBySession,
    deleteParticipants
} = require('../controllers/participantController');

const router = express.Router();

router
    .route('/')
    .get(participants)
    .post(createParticipant);

router
    .route('/:id')
    .delete(deleteParticipant);

router
    .route('/session/:id')
    .get(participantsBySession)
    .delete(deleteParticipants);

module.exports = router;