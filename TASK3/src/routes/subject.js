const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController");

router.get("/subjects", async (req, res) => {
  await subjectController.getSubjects(req, res);
});

module.exports = router;
