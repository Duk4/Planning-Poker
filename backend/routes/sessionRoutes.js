const express = require('express');
const {
    sessions,
    createSession,
    session,
    updateSession,
    deleteSession
} = require('../controllers/sessionController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(protect, restrictTo('all'), sessions)
    .post(protect, restrictTo('admin'), createSession);

router
    .route('/:id')
    .get(protect, restrictTo('participant', 'admin'), session)
    .patch(protect, restrictTo('admin'), updateSession)
    .delete(protect, restrictTo('admin'), deleteSession);

module.exports = router;