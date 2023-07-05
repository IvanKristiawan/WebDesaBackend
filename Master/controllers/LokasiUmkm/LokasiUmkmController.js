const LokasiUmkm = require("../../models/LokasiUmkm/LokasiUmkmModel.js");

const getLokasiUmkms = async (req, res) => {
  try {
    const lokasiUmkms = await LokasiUmkm.findAll({
      order: [["namaLokasiUmkm", "ASC"]],
    });
    res.status(200).json(lokasiUmkms);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getLokasiUmkmById = async (req, res) => {
  try {
    const lokasiUmkm = await LokasiUmkm.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(lokasiUmkm);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveLokasiUmkm = async (req, res) => {
  try {
    const insertedLokasiUmkm = await LokasiUmkm.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedLokasiUmkm);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateLokasiUmkm = async (req, res) => {
  try {
    await LokasiUmkm.update(
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
        res.status(200).json({ message: "Lokasi Umkm Updated!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Umkm ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteLokasiUmkm = async (req, res) => {
  try {
    await LokasiUmkm.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Lokasi Umkm Deleted!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Umkm ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getLokasiUmkms,
  getLokasiUmkmById,
  saveLokasiUmkm,
  updateLokasiUmkm,
  deleteLokasiUmkm,
};
