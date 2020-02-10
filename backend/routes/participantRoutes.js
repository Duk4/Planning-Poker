const express = require('express');
const {
    participants,
    createParticipant,
    deleteParticipant,
    participantsBySession
} = require('../controllers/participantController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(protect, participants)
    .post(protect, createParticipant);

router
    .route('/:id')
    .get(protect, participantsBySession)
    .delete(protect, deleteParticipant);

module.exports = router;