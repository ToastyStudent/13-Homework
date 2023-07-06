// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Definition of Collumns for the Product Model, named "id," 
    // "product_name," "price," "stock", and "category_id" respectively
    
    // id is a primary key meaning its referenced as a foreign key elsewhere,
    // is an integer, cannot be null, and autoincrements
    
    // product_name is a string and cannot be null
    
    // price is a primary key meaning its referenced as a foreign key elsewhere.
    // is a decimal, and cannot be null

    // stock is an integer, cannot be null, and has a default value of 10

    // category_id is a foreign key referencing the Category model's primary key of "id"
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
