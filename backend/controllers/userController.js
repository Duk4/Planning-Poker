const User = require('../models/User');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.users = catchAsync(async (req, res, next) => {
    const users = await User.findAll({ where: req.query });
    res.json(users);
});

exports.user = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        return next(new AppError('User with that ID does not exist!', 404));
    }

    res.json(user);
});

exports.createUser = catchAsync(async (req, res, next) => {
    const user = {
        user_id: uuidv4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pw: await bcrypt(req.body.pw, 12),
        status_is: 'active'
    };
    let newUser = await User.create(user);
    newUser.pw = undefined;
    res.status(201).json(newUser);
});

const parseUserRequestBody = (body) => {
    const {
        status_is,
        last_entry,
        pw,
        first_name,
        last_name
    } = body;

    if (status_is) return { status_is };
    if (last_entry) return { last_entry };
    if (pw) { return { pw, changed_pw_at: new Date() } };
    if (first_name && last_name) return { first_name, last_name };

    return new AppError('Invalid input!', 400);
};

exports.updateUser = catchAsync(async (req, res, next) => {
    const updateObj = parseUserRequestBody(req.body);
    if (updateObj.pw) {
        updateObj.pw = await bcrypt.hash(updateObj.pw, 12);
    }
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        return next(new AppError('User with that ID does not exist!', 404));
    }

    let updatedUser = await user.update(updateObj);
    updatedUser.pw = undefined;
    res.status(202).json(updatedUser);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        return next(new AppError('User with that ID does not exist!', 404));
    }

    await user.update({ status_is: "deleted" });
    res.status(202).send("User status: deleted");
});