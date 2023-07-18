const express = require("express");
const controller = require("../../controllers/DaftarPenduduk/DaftarPendudukController.js");
const verify = require("../../../utils/verifyToken.js");
const getDaftarPenduduks = controller.getDaftarPenduduks;
const getDaftarPendudukByKk = controller.getDaftarPendudukByKk;
const getDaftarPendudukById = controller.getDaftarPendudukById;
const saveDaftarPenduduk = controller.saveDaftarPenduduk;
const updateDaftarPenduduk = controller.updateDaftarPenduduk;
const deleteDaftarPenduduk = controller.deleteDaftarPenduduk;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/daftarPenduduks", verifyUser, getDaftarPenduduks);
router.post("/daftarPenduduksByRt", verifyUser, getDaftarPendudukByKk);
router.post("/daftarPenduduks/:id", verifyUser, getDaftarPendudukById);
router.post("/saveDaftarPenduduk", verifyUser, saveDaftarPenduduk);
router.post("/updateDaftarPenduduk/:id", verifyUser, updateDaftarPenduduk);
router.post("/deleteDaftarPenduduk/:id", verifyUser, deleteDaftarPenduduk);

module.exports = router;
