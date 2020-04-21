const Sequelize = require("sequelize");
const db = require("./database");

const Review = db.define("review", {
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    },
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
});

module.exports = Review
