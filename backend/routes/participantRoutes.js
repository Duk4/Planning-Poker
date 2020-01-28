const express = require('express');

const participants = require('../requests/get/participants');
const createParticipant = require('../requests/post/postParticipant');

const participantsBySession = require('../requests/get/participantsBySessionId');
const deleteParticipant = require('../requests/delete/deleteParticipant');

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