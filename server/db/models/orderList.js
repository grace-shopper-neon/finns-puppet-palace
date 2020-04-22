const db = require('../db')
const Sequelize = require('sequelize')

const OrderList = db.define('order-list', {
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderList
