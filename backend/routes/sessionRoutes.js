const express = require('express');
const {
    sessions,
    createSession,
    session,
    updateSession,
    deleteSession
} = require('../controllers/sessionController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(protect, sessions)
    .post(createSession);

router
    .route('/:id')
    .get(session)
    .patch(updateSession)
    .delete(deleteSession);

module.exports = router;