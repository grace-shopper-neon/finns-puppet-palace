const Sequelize = require("sequelize");
const db = require("./database");

const Session = db.define("session", {
});

module.exports = Session
