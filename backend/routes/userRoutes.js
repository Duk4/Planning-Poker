const express = require('express');

const users = require('../requests/get/users');
const createUser = require('../requests/post/postUser');

const user = require('../requests/get/userById');
const updateUser = require('../requests/patch/updateUser');
const deleteUser = require('../requests/delete/deleteUser');

const router = express.Router();

router
    .route('/')
    .get(users)
    .post(createUser);

router
    .route('/:id')
    .get(user)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;