const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const pyanalytics = sequelize.define("pyanalytics", {
    eye_gaze:{
        type:DataTypes.STRING,
        allowNull: false   
    },
    expression:{
        type:DataTypes.STRING,
        allowNull: false 
    },
    playback:{
        type:DataTypes.STRING,
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
    }
});
pyanalytics.sync({ alter: true });
module.exports = pyanalytics;

