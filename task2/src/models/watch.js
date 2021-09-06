const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const watch = sequelize.define("watch", {
    video_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
   status:{
        type:DataTypes.STRING,
         //enum: ["watched", "unwatched","watching"],
         defaultValue:"unwatched"
    },
    email:{
        type:DataTypes.STRING
    }
    
});
watch.sync({ alter: true });
module.exports = watch;

