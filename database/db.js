// require('dotenv').config()
require('custom-env').env(true)
const Sequelize = require('sequelize')
const db = {}

console.log(process.env.DB_HOST)
console.log(process.env.DB_NAME)
console.log(process.env.DB_USER)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
