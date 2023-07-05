const LokasiWisata = require("../../models/LokasiWisata/LokasiWisataModel.js");

const getLokasiWisatas = async (req, res) => {
  try {
    const lokasiWisatas = await LokasiWisata.findAll({
      order: [["namaLokasiWisata", "ASC"]],
    });
    res.status(200).json(lokasiWisatas);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getLokasiWisataById = async (req, res) => {
  try {
    const lokasiWisata = await LokasiWisata.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(lokasiWisata);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveLokasiWisata = async (req, res) => {
  try {
    const insertedLokasiWisata = await LokasiWisata.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedLokasiWisata);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateLokasiWisata = async (req, res) => {
  try {
    await LokasiWisata.update(
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
        res.status(200).json({ message: "Lokasi Wisata Updated!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Wisata ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteLokasiWisata = async (req, res) => {
  try {
    await LokasiWisata.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Lokasi Wisata Deleted!" });
      } else {
        res
          .status(400)
          .json({ message: `Lokasi Wisata ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getLokasiWisatas,
  getLokasiWisataById,
  saveLokasiWisata,
  updateLokasiWisata,
  deleteLokasiWisata,
};
