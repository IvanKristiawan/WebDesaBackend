const express = require("express");
const controller = require("../../controllers/LokasiWisata/LokasiWisataController.js");
const verify = require("../../../utils/verifyToken.js");
const getLokasiWisatas = controller.getLokasiWisatas;
const getLokasiWisataById = controller.getLokasiWisataById;
const saveLokasiWisata = controller.saveLokasiWisata;
const updateLokasiWisata = controller.updateLokasiWisata;
const deleteLokasiWisata = controller.deleteLokasiWisata;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/lokasiWisatas", getLokasiWisatas);
router.post("/lokasiWisatas/:id", verifyUser, getLokasiWisataById);
router.post("/saveLokasiWisata", verifyUser, saveLokasiWisata);
router.post("/updateLokasiWisata/:id", verifyUser, updateLokasiWisata);
router.post("/deleteLokasiWisata/:id", verifyUser, deleteLokasiWisata);

module.exports = router;
