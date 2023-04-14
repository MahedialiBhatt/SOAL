const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/attendance", async (req, res) => {
  await attendanceController.postAttendance(req, res);
});

module.exports = router;
