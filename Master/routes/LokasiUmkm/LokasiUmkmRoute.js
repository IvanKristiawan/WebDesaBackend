const express = require("express");
const controller = require("../../controllers/LokasiUmkm/LokasiUmkmController.js");
const verify = require("../../../utils/verifyToken.js");
const getLokasiUmkms = controller.getLokasiUmkms;
const getLokasiUmkmById = controller.getLokasiUmkmById;
const saveLokasiUmkm = controller.saveLokasiUmkm;
const updateLokasiUmkm = controller.updateLokasiUmkm;
const deleteLokasiUmkm = controller.deleteLokasiUmkm;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/lokasiUmkms", getLokasiUmkms);
router.post("/lokasiUmkms/:id", verifyUser, getLokasiUmkmById);
router.post("/saveLokasiUmkm", verifyUser, saveLokasiUmkm);
router.post("/updateLokasiUmkm/:id", verifyUser, updateLokasiUmkm);
router.post("/deleteLokasiUmkm/:id", verifyUser, deleteLokasiUmkm);

module.exports = router;
