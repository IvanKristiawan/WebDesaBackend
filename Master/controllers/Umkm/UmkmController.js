const Umkm = require("../../models/Umkm/UmkmModel.js");

const getUmkms = async (req, res) => {
  try {
    const umkms = await Umkm.findAll({
      order: [["namaUmkm", "ASC"]],
    });
    res.status(200).json(umkms);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getUmkmById = async (req, res) => {
  try {
    const umkm = await Umkm.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(umkm);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveUmkm = async (req, res) => {
  try {
    const insertedUmkm = await Umkm.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedUmkm);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateUmkm = async (req, res) => {
  try {
    await Umkm.update(
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
        res.status(200).json({ message: "Umkm Updated!" });
      } else {
        res.status(400).json({ message: `Umkm ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteUmkm = async (req, res) => {
  try {
    await Umkm.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Umkm Deleted!" });
      } else {
        res.status(400).json({ message: `Umkm ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUmkms,
  getUmkmById,
  saveUmkm,
  updateUmkm,
  deleteUmkm,
};
