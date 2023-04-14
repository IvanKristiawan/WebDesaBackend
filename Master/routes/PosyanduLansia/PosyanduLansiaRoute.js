const express = require("express");
const controller = require("../../controllers/PosyanduLansia/PosyanduLansiaController.js");
const verify = require("../../../utils/verifyToken.js");
const getPosyanduLansias = controller.getPosyanduLansias;
const getPosyanduLansiaById = controller.getPosyanduLansiaById;
const savePosyanduLansia = controller.savePosyanduLansia;
const updatePosyanduLansia = controller.updatePosyanduLansia;
const deletePosyanduLansia = controller.deletePosyanduLansia;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/posyanduLansias", verifyUser, getPosyanduLansias);
router.post("/posyanduLansias/:id", verifyUser, getPosyanduLansiaById);
router.post("/savePosyanduLansia", verifyUser, savePosyanduLansia);
router.post("/updatePosyanduLansia/:id", verifyUser, updatePosyanduLansia);
router.post("/deletePosyanduLansia/:id", verifyUser, deletePosyanduLansia);

module.exports = router;
