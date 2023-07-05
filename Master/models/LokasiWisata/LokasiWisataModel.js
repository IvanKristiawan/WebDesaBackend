const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const LokasiWisata = db.define(
  "lokasiwisatas",
  {
    namaLokasiWisata: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    linkGoogleMaps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
      defaultValue: "0",
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      defaultValue: "0",
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = LokasiWisata;

(async () => {
  await db.sync();
})();
