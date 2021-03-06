const Sequelize = require('sequelize');
const database = require('../../config/database.js');

const Level = database.define('FDSK_USER_LEVELS', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
    },
    initials: {
        allowNull: false,
        type: Sequelize.STRING(10)
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    status: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    creationDate: {
        allowNull: false,
        type: Sequelize.DATE
    },
    lastUpdatedBy: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    lastUpdateDate: {
        allowNull: true,
        type: Sequelize.DATE
    }
});

module.exports = Level;