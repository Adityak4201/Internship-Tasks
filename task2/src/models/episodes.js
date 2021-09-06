const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const episodes = sequelize.define("episodes", {
    episode_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    episode_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    series_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }

})
episodes.sync({ force: false })     //NOTE: alter: true only for dev server needs to be removed before prod server.

module.exports = episodes