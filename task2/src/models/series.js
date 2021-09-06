const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");
const episodes = require("../models/episodes")

const series = sequelize.define("series", {
    series_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cast: {
        type: DataTypes.STRING,
        allowNull: true
    },
    directors: {
        type: DataTypes.STRING,
        allowNull: true
    },
    producers: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    organization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processed: {
        type: DataTypes.STRING,
        defaultValue: "NO"
    }
})
series.sync({ force: false })     //NOTE: alter: true only for dev server needs to be removed before prod server.
//One to many relationship.
series.hasMany(episodes, { foreignKey: "series_id", onDelete: "cascade" });
episodes.belongsTo(series, { foreignKey: "series_id" });

module.exports = series