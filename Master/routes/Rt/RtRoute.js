const express = require("express");
const controller = require("../../controllers/Rt/RtController.js");
const verify = require("../../../utils/verifyToken.js");
const getRts = controller.getRts;
const getRtById = controller.getRtById;
const saveRt = controller.saveRt;
const updateRt = controller.updateRt;
const deleteRt = controller.deleteRt;
const verifyUser = verify.verifyUser;

const router = express.Router();

router.post("/rts", verifyUser, getRts);
router.post("/rts/:id", verifyUser, getRtById);
router.post("/saveRt", verifyUser, saveRt);
router.post("/updateRt/:id", verifyUser, updateRt);
router.post("/deleteRt/:id", verifyUser, deleteRt);

module.exports = router;
