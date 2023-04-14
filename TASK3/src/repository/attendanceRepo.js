const db = require("../database/models");
const Attendance = db.attendance;
const { Op } = db.Sequelize;

async function postAttendance(studentId, subjectId, date, status) {
  let resData;
  try {
    const attendance = await Attendance.create({
      studentId: studentId,
      subjectId: subjectId,
      date: date ? date : new Date().toISOString().slice(0, 10),
      status: status,
    });
    resData = attendance;
  } catch (err) {
    throw err;
  }
  return resData;
}

async function getLast5AttendedclassByStudent(studentId) {
  let resData;
  try {
    const attendedClass = await Attendance.findAll({
      where: {
        studentId: studentId,
      },
      order: [["date", "DESC"]],
      limit: 5,
      include: [
        { model: db.student, attributes: ["name"] },
        { model: db.subject, attributes: ["name"] },
      ],
      exclude: [],
    });
    resData = attendedClass;
  } catch (err) {
    throw err;
  }
  return resData;
}

async function getAllclassesAttendedByStudentInGivenMonth(studentId, month) {
  let resData;
  try {
    const currentYear = new Date().getFullYear();

    const startDate = new Date(currentYear, month - 1, 1);
    const endDate = new Date(currentYear, month, 0);

    const attendedClass = await Attendance.findAll({
      where: {
        studentId: `${studentId}`,
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
      include: [
        { model: db.student, attributes: ["name"] },
        { model: db.subject, attributes: ["name"] },
      ],
    });
    resData = attendedClass;
  } catch (err) {
    throw err;
  }
  return resData;
}

async function attendanceBelow85() {
  let resData;
  try {
    const attendedClass = await db.sequelize.query(`
    SELECT students.name, attendances."studentId", COUNT(*) AS total_classes, 
    COUNT(CASE WHEN status = true THEN 1 END) AS attended_classes,
    100*COUNT(CASE WHEN status = true THEN 1 END)/count(*) AS attendance_percentage
    FROM attendances
    JOIN students ON attendances."studentId" = students.id
    GROUP BY students.name,attendances."studentId"
    HAVING 100*COUNT(CASE WHEN status = true THEN 1 END)/count(*) < 85
  `);
    resData = attendedClass[0];
  } catch (err) {
    throw err;
  }
  return resData;
}

module.exports = {
  postAttendance,
  getLast5AttendedclassByStudent,
  getAllclassesAttendedByStudentInGivenMonth,
  attendanceBelow85,
};
