const attendanceRepo = require("../repository/attendanceRepo");

async function postAttendance(studentId, subjectId, date, status) {
  return await attendanceRepo.postAttendance(
    studentId,
    subjectId,
    date,
    status
  );
}

module.exports = { postAttendance };
