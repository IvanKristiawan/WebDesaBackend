const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");

const { DataTypes } = Sequelize;

const Umkm = db.define(
  "umkms",
  {
    namaUmkm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkWebsite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Umkm;

(async () => {
  await db.sync();
})();
