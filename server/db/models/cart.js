const db = require('./database')
const Sequelize = require('sequelize')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('inProgress', 'complete'),
    allowNull: false
  }
})

module.exports = Cart
