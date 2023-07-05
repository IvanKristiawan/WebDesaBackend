const express = require("express");
const controller = require("../../controllers/LokasiPetinggi/LokasiPetinggiController.js");
const verify = require("../../../utils/verifyToken.js");
const getLokasiPetinggis = controller.getLokasiPetinggis;
const getLokasiPetinggiById = controller.getLokasiPetinggiById;
const saveLokasiPetinggi = controller.saveLokasiPetinggi;
const updateLokasiPetinggi = controller.updateLokasiPetinggi;
const deleteLokasiPetinggi = controller.deleteLokasiPetinggi;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/lokasiPetinggis", getLokasiPetinggis);
router.post("/lokasiPetinggis/:id", verifyUser, getLokasiPetinggiById);
router.post("/saveLokasiPetinggi", verifyUser, saveLokasiPetinggi);
router.post("/updateLokasiPetinggi/:id", verifyUser, updateLokasiPetinggi);
router.post("/deleteLokasiPetinggi/:id", verifyUser, deleteLokasiPetinggi);

module.exports = router;
