const Sequelize = require("sequelize");
const db = require("./database");

const Product = db.define("product", {
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
  color: { // How does this get set up?
    type: Sequelize.ENUM('red', 'blue', 'green', 'orange', 'yellow'),
    defaultValue: 'red'
  },
  animal: {
    type: Sequelize.ENUM('pig', 'dog', 'cat', 'penguin', 'alligator'),
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

});

module.exports = Product
