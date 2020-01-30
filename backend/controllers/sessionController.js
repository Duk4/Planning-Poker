const Session = require('../models/Session');
const uuidv4 = require('uuid/v4');

exports.sessions = async (req, res) => {
    try {
        const sessions = await Session.findAll();
        res.json(sessions);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.session = async (req, res) => {
    try {
        const { id } = req.params;
        const session = await Session.findByPk(id);
        res.json(session);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.sessionAdmin = async (req, res) => {
    try {
        const { session_admin } = req.params;
        const session = await Session.findAll({ where: { session_admin } });
        res.json(session);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.createSession = async (req, res) => {
    try {
        const session = {
            session_id: uuidv4(),
            session_name: req.body.session_name,
            session_admin: req.body.session_admin
        };
        await Session.create(session);
        res.status(201).json(session);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

exports.updateSession = async (req, res) => {
    try {
        const { id } = req.params;
        const session = await Session.findByPk(id);
        await session.update({ session_name: req.body.session_name });
        res.status(202).json(session);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

exports.deleteSession = async (req, res) => {
    try {
        const { id } = req.params;
        await Session.destroy({ where: { session_id: id } });
        res.status(202).send("Session deleted...");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};