const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");
const Rt = require("../../models/Rt/RtModel.js");

const { DataTypes } = Sequelize;

const Penduduk = db.define(
  "penduduks",
  {
    kkPenduduk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaPenduduk: {
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

    // Foreign Key Rt
    rtId: {
      type: DataTypes.INTEGER,
      default: 1,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Penduduk.belongsTo(Rt, {
  foreignKey: "rtId",
  targetKey: "id",
});

module.exports = Penduduk;

(async () => {
  await db.sync();
})();
