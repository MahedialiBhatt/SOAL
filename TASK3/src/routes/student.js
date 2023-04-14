const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/students", async (req, res) => {
  await studentController.getStudents(req, res);
});

router.get("/student/last-five/:studentId", async (req, res) => {
  await studentController.getLast5AttendedclassByStudent(req, res);
});

router.get("/student/:studentId/:month", async (req, res) => {
  await studentController.getAttendedClassesMonth(req, res);
});

router.get("/student/below85", async (req, res) => {
  await studentController.attendanceBelow85(req, res);
});

module.exports = router;
