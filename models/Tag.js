const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // Definition of Collumns for the ProductTag Model, named "id," 
    // and "tag_name" respectively
    
    // id is a primary key meaning its referenced as a foreign key elsewhere,
    // is an integer, cannot be null, and autoincrements
    
    // tag_name is a string
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
