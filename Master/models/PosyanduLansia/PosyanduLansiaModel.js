const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const PosyanduLansia = db.define(
  "posyandulansias",
  {
    tglInputPosyanduLansia: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    kkPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    nikPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    namaPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    umurPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tglLahirPosyanduLansia: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    bbPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tensiPosyanduLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = PosyanduLansia;

(async () => {
  await db.sync();
})();
