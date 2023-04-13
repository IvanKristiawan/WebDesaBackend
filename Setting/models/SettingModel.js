const { Sequelize } = require("sequelize");
const db = require("../../config/Database.js");

const { DataTypes } = Sequelize;

const Setting = db.define(
  "settings",
  {
    namaProgram: {
      type: DataTypes.STRING,
      defaultValue: "TECHKU",
      allowNull: true,
    },
    namaDesa: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    alamatDesa: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    kotaDesa: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    provinsiDesa: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    teleponDesa: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Setting;

(async () => {
  await db.sync();
})();
