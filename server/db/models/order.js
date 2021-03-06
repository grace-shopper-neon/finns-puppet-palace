const db = require('../db')
const Sequelize = require('sequelize')

const Order = db.define('order', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Order
