const db = require('../db')

const Order = require('./order')
const OrderList = require('./orderList')
const Cart = require('./cart')

const User = require('./user')
const Review = require('./review')
const Product = require('./product')

// Model Associations
Cart.hasMany(OrderList)
OrderList.belongsTo(Cart)

User.hasMany(Review)
Review.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

OrderList.hasMany(Product)
Product.belongsTo(OrderList)

Order.hasMany(OrderList)
OrderList.belongsTo(Order)

module.exports = {
  db,
  Order,
  OrderList,
  Cart,
  User,
  Review,
  Product
}
