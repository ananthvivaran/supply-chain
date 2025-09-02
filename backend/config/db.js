<<<<<<< HEAD
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // Change to 'postgres' if you use PostgreSQL
  logging: false
});

module.exports = sequelize;
=======
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // Change to 'postgres' if you use PostgreSQL
  logging: false
});

module.exports = sequelize;
>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
