const express = require('express');
const {
    sessions,
    createSession,
    session,
    updateSession,
    deleteSession
} = require('../controllers/sessionController');

const router = express.Router();

router
    .route('/')
    .get(sessions)
    .post(createSession);

router
    .route('/:id')
    .get(session)
    .patch(updateSession)
    .delete(deleteSession);

module.exports = router;