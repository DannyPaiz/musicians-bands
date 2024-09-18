const { DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');


class Song extends Model { };

// TODO - define the Song model
Song.init(
    {
        title: DataTypes.STRING,
        year: DataTypes.NUMBER,
        length: DataTypes.NUMBER
    },
    {
        sequelize: sequelize,
        modelName: "Song"
    }
)


module.exports = {
    Song
};