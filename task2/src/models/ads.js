const { DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

const ads = sequelize.define("ads", {
    // ads_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false
    // },
    org_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ads_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ads_img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ads_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ads_processed: {
        type: DataTypes.STRING,
        defaultValue: "NO"
    }
});
ads.sync({ alter: true });
module.exports = ads;

