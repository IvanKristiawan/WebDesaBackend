const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const TutupPeriode = db.define(
  "tutupperiodes",
  {
    namaPeriode: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    dariTanggal: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: true,
    },
    sampaiTanggal: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = TutupPeriode;

(async () => {
  await db.sync();
})();
