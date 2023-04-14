const PosyanduLansia = require("../../models/PosyanduLansia/PosyanduLansiaModel.js");
const { formatDate } = require("../../../helper/helper");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getPosyanduLansias = async (req, res) => {
  try {
    let tempAllPosyanduLansia = [];
    const posyanduLansias = await PosyanduLansia.findAll({
      where: {
        [Op.and]: [
          {
            tglInputPosyanduLansia: {
              [Op.gte]: new Date(req.body.dariTanggal),
            },
          },
          {
            tglInputPosyanduLansia: {
              [Op.lte]: new Date(req.body.sampaiTanggal),
            },
          },
        ],
      },
      order: [["kkPosyanduLansia", "ASC"]],
    });

    // Formatting date and Parsing json from string data
    for (let element of posyanduLansias) {
      let objectPosyanduLansia = {
        ...element.dataValues,
        tglLahirPosyanduLansia: formatDate(
          element.dataValues.tglLahirPosyanduLansia
        ),
      };
      tempAllPosyanduLansia.push(objectPosyanduLansia);
    }

    res.status(200).json(tempAllPosyanduLansia);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPosyanduLansiaById = async (req, res) => {
  try {
    const posyanduLansia = await PosyanduLansia.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(posyanduLansia);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePosyanduLansia = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });

  try {
    const insertedPosyanduLansia = await PosyanduLansia.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedPosyanduLansia);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePosyanduLansia = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });
  try {
    await PosyanduLansia.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Lansia Updated!" });
      } else {
        res.status(400).json({ message: `Lansia ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePosyanduLansia = async (req, res) => {
  try {
    await PosyanduLansia.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Lansia Deleted!" });
      } else {
        res.status(400).json({ message: `Lansia ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPosyanduLansias,
  getPosyanduLansiaById,
  savePosyanduLansia,
  updatePosyanduLansia,
  deletePosyanduLansia,
};