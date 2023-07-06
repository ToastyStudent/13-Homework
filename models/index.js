// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// The following code defines the relationship between each of the models
// and one another

// Products belongsTo Category, meaning that the Product model 
// has a foreign key in the form of "category_id" that references the
// Category model's primary key of "id"
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products, meaning that a single Category can have
// multiple Products and that each one of said Products has a foreign key
// in the form of "category_id" that references the Category model's
// 
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag,) meaning that a
// a single Product can have multiple Tags and that each one of said Tags
// has a foreign key in the form of "product_id" that references the
// Product model's primary key of "id"
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag,) meaning that a single Tag
// can have multiple Products and that each one of said Products has a foreign
// key in the form of "tag_id" that references the Tag model's primary key of "id"
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
