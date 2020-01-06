const Sequelize = require('sequelize');
const db = require('../database');
const User = require('./User');
const Session = require('./Session');

const Participant = db.define('participants', {
    participant: {
        type: Sequelize.UUID, allowNull: false, primaryKey: true,
        references: { model: User, key: 'user_id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE }
    },
    session_id: {
        type: Sequelize.UUID, allowNull: false,
        references: { model: Session, key: 'session_id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE }
    }
}, { timestamps: false });

module.exports = Participant;