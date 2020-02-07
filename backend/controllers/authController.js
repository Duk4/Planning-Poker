const { promisify } = require('util');
const uuidv4 = require('uuid/v4');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const getToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

exports.signup = catchAsync(async (req, res, next) => {
    const user = {
        user_id: uuidv4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pw: req.body.pw,
        status_is: 'active'
    };
    let newUser = await User.create(user);
    newUser.pw = undefined;
    const token = getToken(newUser.user_id);
    res.status(201).json({
        status: 'success',
        token,
        newUser
    });
});

exports.login = async (req, res, next) => {
    const { email, pw } = req.body;

    // 1) check if email and pw exist
    if (!email || !pw) {
        return next(new AppError('Please provide email and password!', 400));
    }

    // 2) check if user exists && pw is correct
    const user = await User.scope('withPassword').findOne({ where: { email } });
    if (!user || !(await user.validPassword(pw, user.pw))) {
        return next(new AppError('Incorrect email and password!', 401));
    };

    // 3) if all good, send token
    const token = getToken(user.user_id);
    res.status(200).json({
        status: 'success',
        token
    });
};

exports.protect = catchAsync(async (req, res, next) => {
    // 1) Get token and check if it exists
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    };

    if (!token) {
        return next(new AppError('You are not legged in! Please log in to get access.', 401));
    };

    // 2) Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await User.findOne({ where: { user_id: decoded.id, status_is: 'active' } });
    if (!currentUser) {
        return next(new AppError('The user belonging to this token does no longer exist!', 401));
    }

    // 4) Check if user changed password after jwt was issued
    if (currentUser.didPasswordChange(decoded.iat)) {
        return next(new AppError('User recently changed password. Please log in again!', 401));
    };

    req.user = currentUser;
    next();
});