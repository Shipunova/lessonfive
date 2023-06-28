const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const WishList = sequelize.define('wishList', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const WishListProduct = sequelize.define('wishListProduct', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
    price: {type:DataTypes.INTEGER, allowNull: false},
    img: {type:DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
}) 

const Brand = sequelize.define('brand', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductInfo = sequelize.define('product_info', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false},
    description: {type:DataTypes.INTEGER, allowNull: false},
})

const TypeBrand = sequelize.define ('type_brand', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Article = sequelize.define('article', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: true},
    img: {type:DataTypes.STRING, allowNull: false},
})

User.hasOne(WishList)
WishList.belongsTo(User)

WishList.hasMany(WishListProduct)
WishListProduct.belongsTo(WishList)
 
Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)
 
Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Product.hasMany(WishListProduct)
WishListProduct.belongsTo(Product)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand}) 

module.exports = {User, Brand, Type, WishList, WishListProduct, Product, TypeBrand, Article}

