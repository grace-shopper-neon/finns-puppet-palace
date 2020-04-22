const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    // Will this work?
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  googleId: {
    // Do we need to include this or no?
    type: Sequelize.TEXT
  }
})

module.exports = User
