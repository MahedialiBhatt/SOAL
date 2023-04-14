const attendanceService = require("../service/attendanceService");

async function postAttendance(req, res) {
  try {
    const { studentId, subjectId, date, status } = req.body;

    if (!studentId || !subjectId || !date || !status) {
      res.status(500).send({ error: "Required Field's missing" });
    }
    
    const attendance = await attendanceService.postAttendance(
      studentId,
      subjectId,
      date,
      status
    );
    res.send({ message: "Success", data: attendance });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = { postAttendance };
