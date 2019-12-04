const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('users', {
    user_id: { type: Sequelize.UUIDV4, primaryKey: true },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    pw: { type: Sequelize.STRING },
    joined_on: { type: Sequelize.DATE },
    last_entry: { type: Sequelize.DATE }
}, { timestamps: false });

module.exports = User;