const Rt = require("../../models/Rt/RtModel.js");

const getRts = async (req, res) => {
  try {
    const rts = await Rt.findAll({
      order: [["kodeRt", "ASC"]],
    });
    res.status(200).json(rts);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getRtById = async (req, res) => {
  try {
    const rt = await Rt.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(rt);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveRt = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });

  try {
    const insertedRt = await Rt.create({
      ...req.body,
    });
    // Status 201 = Created
    res.status(201).json(insertedRt);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateRt = async (req, res) => {
  Object.keys(req.body).forEach(function (k) {
    if (typeof req.body[k] == "string") {
      req.body[k] = req.body[k].toUpperCase().trim();
    }
  });
  try {
    await Rt.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Rt Updated!" });
      } else {
        res.status(400).json({ message: `Rt ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteRt = async (req, res) => {
  try {
    await Rt.destroy({
      where: {
        id: req.params.id,
      },
    }).then((num) => {
      // num come from numbers of updated data
      if (num == 1) {
        res.status(200).json({ message: "Rt Deleted!" });
      } else {
        res.status(400).json({ message: `Rt ${req.params.id} not found!` });
      }
    });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRts,
  getRtById,
  saveRt,
  updateRt,
  deleteRt,
};
