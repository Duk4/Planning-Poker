const Session = require('../models/Session');
const uuidv4 = require('uuid/v4');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.sessions = catchAsync(async (req, res, next) => {
    const sessions = await Session.findAll();
    res.json(sessions);
});

exports.session = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const session = await Session.findByPk(id);

    if (!session) {
        return next(new AppError('Session with that ID does not exist!', 404));
    }

    res.json(session);
});

exports.sessionAdmin = catchAsync(async (req, res, next) => {
    const { session_admin } = req.params;
    const session = await Session.findAll({ where: { session_admin } });

    if (!session) {
        return next(new AppError('Session with that ID does not exist!', 404));
    }

    res.json(session);
});

exports.createSession = catchAsync(async (req, res, next) => {
    const session = {
        session_id: uuidv4(),
        session_name: req.body.session_name,
        session_admin: req.body.session_admin
    };
    await Session.create(session);
    res.status(201).json(session);
});

exports.updateSession = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const session = await Session.findByPk(id);

    if (!session) {
        return next(new AppError('Session with that ID does not exist!', 404));
    }

    await session.update({ session_name: req.body.session_name });
    res.status(202).json(session);
});

exports.deleteSession = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const session = await Session.findAll({ where: { session_id: id } });

    if (!session) {
        return next(new AppError('Session with that ID does not exist!', 404));
    }

    await Session.destroy({ where: { session_id: id } });
    res.status(202).send("Session deleted...");
});