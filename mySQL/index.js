var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Su9neqrm", // Replace with the correct password for the root user
  database: "wizat",
});

// Escaping Query

// con.connect((error) => {
//   if (error) throw error;
//   console.log("Connected");

//   var adr = "cnx";
//   var name = "passavit";

// var sql = "SELECT * FROM customer where address = " + mysql.escape(adr);
// con.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

//   var sql = "SELECT * FROM customer WHERE name = ? or address = ?";
//   con.query(sql, [name, adr], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// where

// con.connect((error) => {
//   if (error) throw error;
//   console.log("Connected");

//   con.query(
//     "select * from customer where address like 'b%'",
//     (error, result, feilds) => {
//       if (error) throw error;
//       console.log(result);
//     }
//   );
// });

// Select

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");

//   con.query(
//     "select id , name , address from customer",
//     (err, result, fields) => {
//       if (err) throw err;
//       console.log(fields[0]);
//     }
//   );
// });

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
