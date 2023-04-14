const db = require("./models/index");
const studentData = require("./student.json").data;

async function dataInsert() {
  // Loading data from student.json

  (async () => {
    await db.subject.bulkCreate([
      {
        id: 1,
        name: "Mathematics",
      },
      {
        id: 2,
        name: "Physics",
      },
      {
        id: 3,
        name: "Computer Science",
      },
      {
        id: 4,
        name: "Chemistry",
      },
      {
        id: 5,
        name: "Biology",
      },
    ]);
  })();

  (async () => {
    await db.student.bulkCreate([
      { id: 1, name: "Cathy Hirthe", email: "Rebekah_Williamson@yahoo.com" },
      { id: 2, name: "Mindy Dare", email: "Alan12@yahoo.com" },
      { id: 3, name: "Mr. Kim Koepp", email: "Dashawn.Walsh71@gmail.com" },
      { id: 4, name: "Glenda Larson", email: "Jakayla.Kuhn98@gmail.com" },
      { id: 5, name: "Kent Miller", email: "Alexander.Reilly81@hotmail.com" },
      { id: 6, name: "Veronica Heller", email: "Lewis56@gmail.com" },
      { id: 7, name: "Clyde Rosenbaum", email: "Kacey.Grant@yahoo.com" },
      {
        id: 8,
        name: "Ms. Marcia Schimmel",
        email: "Camren_Dietrich7@yahoo.com",
      },
      { id: 9, name: "Pat Nienow", email: "Zoey.Conn@yahoo.com" },
      {
        id: 10,
        name: "Charlene Pfannerstill",
        email: "Saul_Gislason10@hotmail.com",
      },
      { id: 11, name: "Leticia Dibbert", email: "Shaniya96@gmail.com" },
      { id: 12, name: "Terrence Heller I", email: "Dell.Gutmann@hotmail.com" },
      { id: 13, name: "Doug O'Reilly", email: "Athena.Mraz@hotmail.com" },
      { id: 14, name: "Vickie Spencer", email: "Judah.Kuphal35@hotmail.com" },
      { id: 15, name: "Ronnie Kemmer", email: "Terrence_Gulgowski@gmail.com" },
      { id: 16, name: "Adrienne Hoppe", email: "Bernhard_White78@hotmail.com" },
      { id: 17, name: "Violet Watsica", email: "Rey_Waelchi96@gmail.com" },
      { id: 18, name: "Violet Brown", email: "Alicia_Prohaska@hotmail.com" },
      { id: 19, name: "Toni Daugherty", email: "Dewayne_Robel@gmail.com" },
      { id: 20, name: "Christian Collins", email: "Dale6@hotmail.com" },
    ]);
  })();

  (async () => {
    await db.attendance.bulkCreate(studentData);
  })();
}

module.exports = { dataInsert };
