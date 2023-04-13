const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const Rt = db.define(
  "rts",
  {
    kodeRt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Rt;

(async () => {
  await db.sync();
})();
