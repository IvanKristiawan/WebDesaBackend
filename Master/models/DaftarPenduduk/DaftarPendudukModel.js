const { Sequelize } = require("sequelize");
const db = require("../../../config/Database.js");
const Penduduk = require("../../models/Penduduk/PendudukModel.js");

const { DataTypes } = Sequelize;

const DaftarPenduduk = db.define(
    "daftarpenduduks",
    {
        kkPenduduk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nikDaftarPenduduk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        namaDaftarPenduduk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jenisKelaminPenduduk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        statusPenduduk: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Foreign Key Penduduk
        pendudukId: {
            type: DataTypes.INTEGER,
            default: 1,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

DaftarPenduduk.belongsTo(Penduduk, {
    foreignKey: "pendudukId",
    targetKey: "id",
});

module.exports = DaftarPenduduk;

(async () => {
    await db.sync();
})();
