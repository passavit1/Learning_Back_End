var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Su9neqrm", // Replace with the correct password for the root user
  database: "wizat",
});

// Select

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");

  con.query("select name , address from customer", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

// Fill a table

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");

// For 1 record
// var sql = "insert into customer (name, address) values ('passavit' , 'BKK')";

// For multiple records
//   var sql = "insert into customer (name, address) values ?";
//   var value = [
//     ["maicharoen", "bkk"],
//     ["meww", "cnx"],
//     ["eood", "cnx"],
//   ];

//   con.query(sql, [value], (err, result) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// Create table

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

//   var sql =
//     "create table customers (name varchar(255) , address varchar(255)) ";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("table created successfully");
//   });
// });
