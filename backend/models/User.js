const Sequelize = require('sequelize');
const db = require('../database');
const Session = require('./Session');
const Participant = require('./Participant');

const User = db.define('users', {
    user_id: { type: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
    first_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 50] } },
    last_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 50] } },
    email: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 100] } },
    pw: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 100] } },
    joined_on: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    last_entry: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
}, { timestamps: false });

User.hasMany(Session, { foreignKey: 'user_id', as: 'session_admin' });
User.hasMany(Participant, { foreignKey: 'user_id' });

module.exports = User;