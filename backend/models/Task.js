const Sequelize = require('sequelize');
const db = require('../database');
const Session = require('../models/Session');

const Task = db.define('tasks', {
    task_id: { type: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
    task_name: { type: Sequelize.STRING, allowNull: false, validate: { len: [2, 255] } },
    task_value: { type: Sequelize.STRING, allowNull: false, validate: { len: [1, 3] } },
    session_id: {
        type: Sequelize.UUID, allowNull: false,
        references: { model: Session, key: 'session_id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE }
    }
}, { timestamps: false });

module.exports = Task;