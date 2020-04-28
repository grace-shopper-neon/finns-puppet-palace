const db = require('../db')
const Sequelize = require('sequelize')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('inProgress', 'complete'),
    allowNull: false,
    defaultValue: 'inProgress'
  }
})

module.exports = Cart
