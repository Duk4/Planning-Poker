const Participant = require('../models/Participant');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.participants = catchAsync(async (req, res, next) => {
    const participants = await Participant.findAll();
    res.json(participants);
});

exports.participantsBySession = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const participants = await Participant.findAll({ where: { session_id: id } });

    if (!participants) {
        return next(new AppError('Participants with that session ID do not exist!', 404));
    }

    res.json(participant);
});

exports.createParticipant = catchAsync(async (req, res, next) => {
    const participant = req.body;
    await Participant.create(participant);
    res.status(201).json(participant);
});

exports.deleteParticipant = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const participant = Participant.findAll({ where: { participant: id } });

    if (!participant) {
        return next(new AppError('Participant with that ID does not exist!', 404));
    }

    await Participant.destroy({ where: { participant: id } });
    res.status(202).send("Participant deleted...");
});