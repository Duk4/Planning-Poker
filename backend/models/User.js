const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('users', {
    user_id: { type: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
    first_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 50] } },
    last_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 50] } },
    email: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 100] } },
    pw: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 100] } },
    status_is: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 10] } },
    joined_on: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    last_entry: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
}, { timestamps: false });

module.exports = User;