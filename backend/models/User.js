const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
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
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            user.pw = await bcrypt.hash(user.pw, 12);
        }
    },
    defaultScope: {
        attributes: { exclude: ['pw'] }
    },
    scopes: {
        withPassword: {
            attributes: {}
        }
    }
});

User.prototype.validPassword = async function (candidatePW, userPW) {
    return await bcrypt.compare(candidatePW, userPW);
}

module.exports = User;