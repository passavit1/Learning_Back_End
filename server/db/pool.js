const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "Database_learning",
  password: "admin",
  port: 54320,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Connected to PostgreSQL database at ${res.rows[0].now}`);
  }
});

module.exports = pool;
