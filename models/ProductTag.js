const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Definition of Collumns for the ProductTag Model, named "id," 
    // "product_id," and "tag_id" respectively
    
    // id is a primary key meaning its referenced as a foreign key elsewhere,
    // is an integer, cannot be null, and autoincrements
    
    // product_id is a foreign key referencing the Product model's primary key of "id"
    
    // tag_id is a foreign key referencing the Tag model's primary key of "id"
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
