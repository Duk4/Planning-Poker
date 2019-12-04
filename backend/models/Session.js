const Sequelize = require('sequelize');
const db = require('../database');
const User = require('../models/User');

const Session = db.define('sessions', {
    session_id: { type: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
    session_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 255] } },
    session_admin: {
        type: Sequelize.UUID, allowNull: false,
        references: { model: User, key: 'user_id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE }
    }
}, { timestamps: false });

module.exports = Session;