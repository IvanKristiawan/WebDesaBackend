const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const PosyanduBalita = db.define(
  "posyandubalitas",
  {
    tglInputBalita: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    kkBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    nikBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    anakKeBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    namaBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    tglLahirBalita: {
      type: DataTypes.DATE,
      default: new Date(),
      allowNull: true,
    },
    umurBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    jenisKelaminBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    beratBadanLahirBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    panjangBadanLahirBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    namaAyahBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    namaIbuBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    nikAyahBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    pendidikanTerakhirAyahBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    pendidikanTerakhirIbuBalita: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    rtBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    beratBadanBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    panjangBadanBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    lingkarLenganAtasBalita: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    lingkarKepalaBalita: {
      type: DataTypes.INTEGER,
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

module.exports = PosyanduBalita;

(async () => {
  await db.sync();
})();
