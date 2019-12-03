const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define(
    'users'
);

User.readAll = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.send({ users });
    } catch (error) {
        return res.send(error);
    }
};

module.exports = User;