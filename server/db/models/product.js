const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '123.jpg'
  },
  color: {
    // How does this get set up?
    type: Sequelize.ENUM('red', 'blue', 'green', 'orange', 'yellow'),
    defaultValue: 'red'
  },
  animal: {
    type: Sequelize.ENUM('pig', 'dog', 'cat', 'penguin', 'alligator'),
    allowNull: false
  },
  price: {
    // needs to be in cents, can use dinero.js library potentially. Or some other conversion parsing/parsing library through npm.
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Product
