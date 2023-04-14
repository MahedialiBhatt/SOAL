const attendanceRepo = require("../repository/attendanceRepo");
const studentRepo = require("../repository/studentRepo");

async function getStudents() {
  return await studentRepo.getAllStudents();
}

async function getLast5AttendedclassByStudent(studentId) {
  return await attendanceRepo.getLast5AttendedclassByStudent(studentId);
}

async function getAllclassesAttendedByStudentInGivenMonth(studentId, month) {
  return await attendanceRepo.getAllclassesAttendedByStudentInGivenMonth(
    studentId,
    month
  );
}

async function attendanceBelow85() {
  return await attendanceRepo.attendanceBelow85();
}

module.exports = {
  getLast5AttendedclassByStudent,
  getAllclassesAttendedByStudentInGivenMonth,
  attendanceBelow85,
  getStudents
};
