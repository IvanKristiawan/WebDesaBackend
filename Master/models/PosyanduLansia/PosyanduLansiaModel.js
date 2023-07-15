const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const PosyanduLansia = db.define(
  "posyandulansias",
  {
    tglInputLansia: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    namaLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tglLahirLansia: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    umurLansia: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    noRmLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tglPemeriksaan: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    tempatPemeriksaanLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    noJaminanLansia: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tekananDarahLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    gulaDarahLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    kolesterolLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    tbLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    bbLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
    lpLansia: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: "ADA", // ADA, MENGINGGAL, PINDAH
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
