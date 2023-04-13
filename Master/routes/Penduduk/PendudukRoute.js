const express = require("express");
const controller = require("../../controllers/Penduduk/PendudukController.js");
const verify = require("../../../utils/verifyToken.js");
const getPenduduks = controller.getPenduduks;
const getPendudukById = controller.getPendudukById;
const savePenduduk = controller.savePenduduk;
const updatePenduduk = controller.updatePenduduk;
const deletePenduduk = controller.deletePenduduk;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/penduduks", verifyUser, getPenduduks);
router.post("/penduduks/:id", verifyUser, getPendudukById);
router.post("/savePenduduk", verifyUser, savePenduduk);
router.post("/updatePenduduk/:id", verifyUser, updatePenduduk);
router.post("/deletePenduduk/:id", verifyUser, deletePenduduk);

module.exports = router;
