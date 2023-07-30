const { Sequelize } = require("sequelize");

// Connect PhpMyAdmin MySql to Nodejs
const db = new Sequelize("kembang_putihan", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Akun MySql Hosting
// const db = new Sequelize("n1578302_kembang_putihan", "n1578302_ivan", "kembangputihan", {
//   host: "127.0.0.1",
//   dialect: "mysql",
// });

module.exports = db;
