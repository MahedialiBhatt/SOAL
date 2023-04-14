const subjectService = require("../service/subjectService");

async function getSubjects(req, res) {
  try {
    const subjects = await subjectService.getSubjects();
    res.send({ message: "Success", data: subjects });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = { getSubjects };
