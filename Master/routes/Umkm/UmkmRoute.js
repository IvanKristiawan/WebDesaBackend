const express = require("express");
const controller = require("../../controllers/Umkm/UmkmController.js");
const verify = require("../../../utils/verifyToken.js");
const getUmkms = controller.getUmkms;
const getUmkmById = controller.getUmkmById;
const saveUmkm = controller.saveUmkm;
const updateUmkm = controller.updateUmkm;
const deleteUmkm = controller.deleteUmkm;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/umkms", getUmkms);
router.post("/umkms/:id", verifyUser, getUmkmById);
router.post("/saveUmkm", verifyUser, saveUmkm);
router.post("/updateUmkm/:id", verifyUser, updateUmkm);
router.post("/deleteUmkm/:id", verifyUser, deleteUmkm);

module.exports = router;
