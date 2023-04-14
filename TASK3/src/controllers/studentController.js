const studentService = require("../service/studentService");

async function getStudents(req, res) {
  try {
    const students = await studentService.getStudents();
    res.send({ message: "Success", data: students });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function getAttendedClassesMonth(req, res) {
  try {
    const studentId = req.params.studentId;
    const month = req.params.month;
    const attendance =
      await studentService.getAllclassesAttendedByStudentInGivenMonth(
        studentId,
        month
      );
    res.send({ message: "Success", data: attendance });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function getLast5AttendedclassByStudent(req, res) {
  try {
    const studentId = req.params.studentId;
    const student = await studentService.getLast5AttendedclassByStudent(studentId);
    res.send({ message: "Success", data: student });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function attendanceBelow85(req, res) {
  try {
    const students = await studentService.attendanceBelow85();
    res.send({ message: "Success", data: students });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
module.exports = {
  getAttendedClassesMonth,
  getLast5AttendedclassByStudent,
  attendanceBelow85,
  getStudents
};
