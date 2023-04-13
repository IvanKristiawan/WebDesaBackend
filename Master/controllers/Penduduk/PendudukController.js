const Penduduk = require("../../models/Penduduk/PendudukModel.js");
const Rt = require("../../models/Rt/RtModel.js");

const getPenduduks = async (req, res) => {
  try {
    const penduduks = await Penduduk.findAll({
      include: [{ model: Rt }],
      order: [["nikPenduduk", "ASC"]],
    });
    res.status(200).json(penduduks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPendudukByRt = async (req, res) => {
  try {
    const penduduk = await Penduduk.findAll({
      where: {
        rtId: req.body.rtId,
      },
      include: [{ model: Rt }],
    });
    res.status(200).json(penduduk);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const getPendudukById = async (req, res) => {
  try {
    const penduduk = await Penduduk.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Rt }],
    });
    res.status(200).json(penduduk);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePenduduk = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });
  try {
    // Find if KK already exist
    const penduduk = await Penduduk.findOne({
      where: {
        kkPenduduk: req.body.kkPenduduk,
      },
    });
    let kkPendudukExist = penduduk;
    if (kkPendudukExist) {
      res.status(400).json({ message: "KK Sudah Ada!" });
    } else {
      const insertedPenduduk = await Penduduk.create({
        ...req.body,
      });
      // Status 201 = Created
      res.status(201).json(insertedPenduduk);
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePenduduk = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });
  try {
    // Find if KK already exist and not current one
    const penduduk = await Penduduk.findOne({
      where: {
        kkPenduduk: req.body.kkPenduduk,
      },
    });
    let kkPendudukExist =
      penduduk && penduduk.dataValues.kkPenduduk !== req.body.kkPendudukLama;
    if (kkPendudukExist) {
      res.status(400).json({ message: "KK Sudah Ada!" });
    } else {
      await Penduduk.update(
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
          res.status(200).json({ message: "Penduduk Updated!" });
        } else {
          res
            .status(400)
            .json({ message: `Penduduk ${req.params.id} not found!` });
        }
      });
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePenduduk = async (req, res) => {
  try {
    await Penduduk.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Penduduk Deleted!" });
      } else {
        res
          .status(400)
          .json({ message: `Penduduk ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPenduduks,
  getPendudukByRt,
  getPendudukById,
  savePenduduk,
  updatePenduduk,
  deletePenduduk,
};
