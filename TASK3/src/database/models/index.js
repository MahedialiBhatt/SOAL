const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.attendance = require("./attendanceModel")(sequelize, Sequelize);
db.student = require("./studentModel")(sequelize, Sequelize);
db.subject = require("./subjectModel")(sequelize, Sequelize);

db.attendance.belongsTo(db.student);
db.attendance.belongsTo(db.subject);
db.student.hasMany(db.attendance);
db.subject.hasMany(db.attendance);

module.exports = db;
