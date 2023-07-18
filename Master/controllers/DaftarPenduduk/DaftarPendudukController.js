const DaftarPenduduk = require("../../models/DaftarPenduduk/DaftarPendudukModel.js");
const Penduduk = require("../../models/Penduduk/PendudukModel.js");

const getDaftarPenduduks = async (req, res) => {
    try {
        const daftarPenduduks = await DaftarPenduduk.findAll({
            include: [{ model: Penduduk }],
            order: [["nikDaftarPenduduk", "ASC"]],
        });
        res.status(200).json(daftarPenduduks);
    } catch (error) {
        // Error 500 = Kesalahan di server
        res.status(500).json({ message: error.message });
    }
};

const getDaftarPendudukByKk = async (req, res) => {
    try {
        const daftarPenduduk = await DaftarPenduduk.findAll({
            where: {
                kkPenduduk: req.body.kkPenduduk,
            },
            include: [{ model: Penduduk }],
        });
        res.status(200).json(daftarPenduduk);
    } catch (error) {
        // Error 404 = Not Found
        res.status(404).json({ message: error.message });
    }
};

const getDaftarPendudukById = async (req, res) => {
    try {
        const daftarPenduduk = await DaftarPenduduk.findOne({
            where: {
                id: req.params.id,
            },
            include: [{ model: Penduduk }],
        });
        res.status(200).json(daftarPenduduk);
    } catch (error) {
        // Error 404 = Not Found
        res.status(404).json({ message: error.message });
    }
};

const saveDaftarPenduduk = async (req, res) => {
    try {
        // Find if NIK already exist
        const daftarPenduduk = await DaftarPenduduk.findOne({
            where: {
                nikDaftarPenduduk: req.body.nikDaftarPenduduk,
            },
        });
        let nikDaftarPendudukExist = daftarPenduduk;
        if (nikDaftarPendudukExist) {
            res.status(400).json({ message: "NIK Sudah Ada!" });
        } else {
            const insertedDaftarPenduduk = await DaftarPenduduk.create({
                ...req.body,
            });
            // Status 201 = Created
            res.status(201).json(insertedDaftarPenduduk);
        }
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
};

const updateDaftarPenduduk = async (req, res) => {
    try {
        // Find if NIK already exist and not current one
        const daftarPenduduk = await DaftarPenduduk.findOne({
            where: {
                nikDaftarPenduduk: req.body.nikDaftarPenduduk,
            },
        });
        let nikDaftarPendudukExist =
            daftarPenduduk && daftarPenduduk.dataValues.nikDaftarPenduduk !== req.body.nikDaftarPendudukLama;
        if (nikDaftarPendudukExist) {
            res.status(400).json({ message: "NIK Sudah Ada!" });
        } else {
            await DaftarPenduduk.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            ).then((num) => {
                // num come from numbers of updated data
                if (num == 1) {
                    res.status(200).json({ message: "Daftar Penduduk Updated!" });
                } else {
                    res
                        .status(400)
                        .json({ message: `Daftar Penduduk ${req.params.id} not found!` });
                }
            });
        }
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
};

const deleteDaftarPenduduk = async (req, res) => {
    try {
        await DaftarPenduduk.destroy({
            where: {
                id: req.params.id,
            },
        }).then((num) => {
            // num come from numbers of updated data
            if (num == 1) {
                res.status(200).json({ message: "Daftar Penduduk Deleted!" });
            } else {
                res
                    .status(400)
                    .json({ message: `Daftar Penduduk ${req.params.id} not found!` });
            }
        });
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getDaftarPenduduks,
    getDaftarPendudukByKk,
    getDaftarPendudukById,
    saveDaftarPenduduk,
    updateDaftarPenduduk,
    deleteDaftarPenduduk
}