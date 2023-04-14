module.exports = (sequelize, Sequelize) => {
  const Attendance = sequelize.define(
    "attendance",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subjectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        default: new Date().toISOString().slice(0, 10),
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Disable timestamps
    }
  );
  return Attendance;
};
