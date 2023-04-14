const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./src/database/models");
const dataInsert = require("./src/database/data-insert");
const attendanceRouter = require("./src/routes/attendance");
const subjectRouter = require("./src/routes/subject");
const studentRouter = require("./src/routes/student");
const { PORT } = process.env;

db.sequelize
  .sync({ force: "true" })
  .then(() => {
    dataInsert.dataInsert();
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db:" + err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use(attendanceRouter);
app.use(subjectRouter);
app.use(studentRouter);

app.listen(PORT, () => {
  console.log(`Server Started On Port:${PORT}`);
});
