const Participant = require('../models/Participant');

exports.participants = async (req, res) => {
    try {
        const participants = await Participant.findAll();
        res.json(participants);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.participantsBySession = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Participant.findAll({ where: { session_id: id } });
        res.json(participant);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.createParticipant = async (req, res) => {
    try {
        const participant = {
            participant: req.body.participant,
            session_id: req.body.session_id
        };
        await Participant.create(participant);
        res.status(201).json(participant);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

exports.deleteParticipant = async (req, res) => {
    try {
        const { id } = req.params;
        await Participant.destroy({ where: { participant: id } });
        res.status(202).send("Participant deleted...");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};