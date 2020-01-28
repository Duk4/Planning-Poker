const express = require('express');

const sessions = require('../requests/get/sessions');
const createSession = require('../requests/post/postSession');

const session = require('../requests/get/sessionById');
const updateSession = require('../requests/patch/updateSessionName');
const deleteSession = require('../requests/delete/deleteSession');

const sessionAdmin = require('../requests/get/sessionsByAdminId');

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

router
    .route('/admin/:session_admin')
    .get(sessionAdmin);

module.exports = router;