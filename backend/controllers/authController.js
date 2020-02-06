const uuidv4 = require('uuid/v4');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const getToken = require('../utils/getToken');

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