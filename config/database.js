const { createPool } = require("mysql");

const pool = createPool({
  port: 3306,
  // host: "10.10.0.1",
  // user: "plato", //mysql username
  // password: "greece*94177", //mysql password
  // database: "faast_rfps", //your database name"

  host: "localhost",
  user: "root", //mysql username
  password: "", //mysql password
  database: "tenzin", //your database name

  connectionLimit: 10
});


module.exports = pool;