const { DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');


// TODO - define the Band model
class Band extends Model { };

// Band Schema
Band.init(
    {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
    },
    {
        sequelize: sequelize,
        modelName: "Band"
    }
)

module.exports = {
    Band
};