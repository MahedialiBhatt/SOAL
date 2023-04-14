const db = require("../database/models")
const Subject = db.student;

async function getAllSubjects() {
  let resData;
  try {
    const subjects = await Subject.findAll();
    resData = subjects;
  } catch (err) {
    throw err;
  }
  return resData;
}

module.exports = { getAllSubjects };
