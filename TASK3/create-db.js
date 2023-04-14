const pgtools = require("pgtools");
require("dotenv").config();

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
};
const databaseName = process.env.POSTGRES_DB;

pgtools.createdb(config, databaseName, function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(`Database '${databaseName}' created.`);
  process.exit(0);
});
