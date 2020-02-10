const express = require('express');
const {
    users,
    createUser,
    user,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const { signup, login } = require('../controllers/authController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router
    .route('/')
    .get(users)
    .post(createUser);

router
    .route('/:id')
    .get(protect, user)
    .patch(protect, updateUser)
    .delete(protect, deleteUser);

module.exports = router;