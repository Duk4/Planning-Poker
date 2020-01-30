const User = require('../models/User');
const uuidv4 = require('uuid/v4');

exports.users = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.user = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        })
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = {
            user_id: uuidv4(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            pw: req.body.pw,
            status_is: 'active'
        };
        await User.create(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

function parseUserRequestBody(body) {
    const {
        status_is,
        last_entry,
        pw,
        first_name,
        last_name
    } = body;

    if (status_is) return { status_is };
    if (last_entry) return { last_entry };
    if (pw) return { pw };
    if (first_name && last_name) return { first_name, last_name };

    throw new Error('Invalid Request');
};

exports.updateUser = async (req, res) => {
    try {
        const updateObj = parseUserRequestBody(req.body);
        const { id } = req.params;
        const user = await User.findByPk(id);
        await user.update(updateObj);
        res.status(202).json(user);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        await user.update({ status_is: "deleted" });
        res.status(202).send("User status: deleted");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Request failed...",
            error
        });
    }
};