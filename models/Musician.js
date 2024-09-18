const { DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');


class Musician extends Model { };

// TODO - define the Musician model
Musician.init(
    {
        name: DataTypes.STRING,
        instrument: DataTypes.STRING
    },
    {
        sequelize: sequelize,
        modelName: "Musician"
    }
)

module.exports = {
    Musician
};