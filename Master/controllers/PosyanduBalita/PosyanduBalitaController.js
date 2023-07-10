const PosyanduBalita = require("../../models/PosyanduBalita/PosyanduBalitaModel.js");
const { formatDate } = require("../../../helper/helper");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getPosyanduBalitas = async (req, res) => {
  try {
    let tempAllPosyanduBalita = [];
    const posyanduBalitas = await PosyanduBalita.findAll({
      where: {
        [Op.and]: [
          {
            tglInputBalita: {
              [Op.gte]: new Date(req.body.dariTanggal),
            },
          },
          {
            tglInputBalita: {
              [Op.lte]: new Date(req.body.sampaiTanggal),
            },
          },
        ],
      },
      order: [["namaBalita", "ASC"]],
    });

    // Formatting date and Parsing json from string data
    for (let element of posyanduBalitas) {
      let objectPosyanduBalita = {
        ...element.dataValues,
        tglLahirBalitaFormatted: formatDate(element.dataValues.tglLahirBalita),
      };
      tempAllPosyanduBalita.push(objectPosyanduBalita);
    }

    res.status(200).json(tempAllPosyanduBalita);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPosyanduBalitaById = async (req, res) => {
  try {
    const posyanduBalita = await PosyanduBalita.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(posyanduBalita);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePosyanduBalita = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });

  try {
    const insertedPosyanduBalita = await PosyanduBalita.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedPosyanduBalita);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePosyanduBalita = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });
  try {
    await PosyanduBalita.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Balita Updated!" });
      } else {
        res.status(400).json({ message: `Balita ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePosyanduBalita = async (req, res) => {
  try {
    await PosyanduBalita.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Balita Deleted!" });
      } else {
        res.status(400).json({ message: `Balita ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPosyanduBalitas,
  getPosyanduBalitaById,
  savePosyanduBalita,
  updatePosyanduBalita,
  deletePosyanduBalita,
};
