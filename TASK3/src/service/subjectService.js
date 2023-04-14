const subjectRepo = require("../repository/subjectRepo");

async function getSubjects() {
  return await subjectRepo.getAllSubjects();
}

module.exports = { getSubjects };
