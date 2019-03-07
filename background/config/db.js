const mysql = require('mysql')
const connection = mysql.createPool({
  host: '118.25.96.200',
  user: 'root',
  password: 'bert5240130',
  database: 'contact'
})

const Sequelize = require('sequelize')
const sequelize = new Sequelize('contact', 'root', 'bert5240130', {
  host: '118.25.96.200',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})

module.exports = sequelize
