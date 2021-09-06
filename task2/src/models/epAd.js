const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const epAd = sequelize.define("epAd", {
    episode_id: {
        type: DataTypes.INTEGER,
    },
    episode_name: {
        type: DataTypes.STRING,
    },
});
epAd.sync({ force: false })
module.exports = epAd