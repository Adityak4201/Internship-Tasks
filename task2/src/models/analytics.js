const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const analytics = sequelize.define("analytics", {
    // ads_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false
    // },
    eye_gaze:{
        type:DataTypes.STRING,
        allowNull: false   
    },
    expression:{
        type:DataTypes.STRING,
        allowNull: false 
    },
    playback:{
        type:DataTypes.INTEGER,
        allowNull: false   
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    dob:{
         type: DataTypes.STRING,
      default : Date
    },
    episode_id: {
        type: DataTypes.INTEGER
    },
    episode_name: {
        type: DataTypes.STRING,
    }
});
analytics.sync({ alter: true });
module.exports = analytics;

