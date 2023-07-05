const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");
const User = require("../../models/UserModel.js");

const { DataTypes } = Sequelize;

const HakAkses = db.define(
  "hakaksess",
  {
    // DESA
    rt: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    penduduk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    bankSampah: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },

    // Lokasi Web
    lokasiPetinggi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    lokasiUmkm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    lokasiWisata: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },

    // POSYANDU
    posyanduLansia: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },

    // UTILITY
    profilUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    daftarUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    setting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    gantiPeriode: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    tutupPeriode: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },

    // Foreign Key User
    userId: {
      type: DataTypes.INTEGER,
      default: 1,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

HakAkses.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});

module.exports = HakAkses;

(async () => {
  await db.sync();
})();
