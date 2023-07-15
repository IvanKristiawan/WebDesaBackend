const express = require("express");
const controller = require("../../controllers/PosyanduBalita/PosyanduBalitaController.js");
const verify = require("../../../utils/verifyToken.js");
const getPosyanduBalitas = controller.getPosyanduBalitas;
const getPosyanduBalitaById = controller.getPosyanduBalitaById;
const generatePosyanduBalitas = controller.generatePosyanduBalitas;
const savePosyanduBalita = controller.savePosyanduBalita;
const updatePosyanduBalita = controller.updatePosyanduBalita;
const deletePosyanduBalita = controller.deletePosyanduBalita;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/posyanduBalitas", verifyUser, getPosyanduBalitas);
router.post("/posyanduBalitas/:id", verifyUser, getPosyanduBalitaById);
router.post("/generatePosyanduBalitas", verifyUser, generatePosyanduBalitas);
router.post("/savePosyanduBalita", verifyUser, savePosyanduBalita);
router.post("/updatePosyanduBalita/:id", verifyUser, updatePosyanduBalita);
router.post("/deletePosyanduBalita/:id", verifyUser, deletePosyanduBalita);

module.exports = router;
