const LokasiPetinggi = require("../../models/LokasiPetinggi/LokasiPetinggiModel.js");

const getLokasiPetinggis = async (req, res) => {
  try {
    const lokasiPetinggis = await LokasiPetinggi.findAll({
      order: [["namaLokasiPetinggi", "ASC"]],
    });
    res.status(200).json(lokasiPetinggis);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getLokasiPetinggiById = async (req, res) => {
  try {
    const lokasiPetinggi = await LokasiPetinggi.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(lokasiPetinggi);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveLokasiPetinggi = async (req, res) => {
  try {
    const insertedLokasiPetinggi = await LokasiPetinggi.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedLokasiPetinggi);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateLokasiPetinggi = async (req, res) => {
  try {
    await LokasiPetinggi.update(
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
        res.status(200).json({ message: "Lokasi Petinggi Updated!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Petinggi ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteLokasiPetinggi = async (req, res) => {
  try {
    await LokasiPetinggi.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Lokasi Petinggi Deleted!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Petinggi ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getLokasiPetinggis,
  getLokasiPetinggiById,
  saveLokasiPetinggi,
  updateLokasiPetinggi,
  deleteLokasiPetinggi,
};
