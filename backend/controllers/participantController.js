const Participant = require('../models/Participant');
const catchAsync = require('../utils/catchAsync');

exports.participants = catchAsync(async (req, res, next) => {
    const participants = await Participant.findAll();
    res.json(participants);
});

exports.participantsBySession = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const participant = await Participant.findAll({ where: { session_id: id } });
    res.json(participant);
});

exports.createParticipant = catchAsync(async (req, res, next) => {
    const participant = {
        participant: req.body.participant,
        session_id: req.body.session_id
    };
    await Participant.create(participant);
    res.status(201).json(participant);
});

exports.deleteParticipant = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    await Participant.destroy({ where: { participant: id } });
    res.status(202).send("Participant deleted...");
});