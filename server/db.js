const { Sequelize } = require("sequelize");

module.exports = new Sequelize({
  database: process.env.DB_NAME, // Название БД
  username: process.env.DB_USER, // Пользователь
  password: process.env.DB_PASSWORD, // ПАРОЛЬ
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
});
