const db = require("../database/models")
const Student = db.student;

async function getAllStudents() {
  let resData;
  try {
    const students = await Student.findAll();
    resData = students;
  } catch (err) {
    throw err;
  }
  return resData;
}

module.exports = { getAllStudents };
