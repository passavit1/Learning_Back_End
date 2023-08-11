var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Su9neqrm", // Replace with the correct password for the root user
  database: "wizat",
});

// Join

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   var sql =
//     "select customer.name as name , address.name as address from customer join address on customer.address = address.id ";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Limit and Offset
// off set used for which row you want to start
// syntax = limit offset , limit

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   let sql = "select * from customer limit 2, 3 "; // same as limit 3 offset 2

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Update database

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   let sql = "update customer set address = 'bkk' where address = 'thai'";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Delete if exits

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   var sql = "drop table if exists tester";
//   con.query(sql, (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Delete Table

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   var sql = "drop table tester";

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Delete rows

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   var del = "maicharoen";
//   var sql = "delete from customer where name = ?";

//   con.query(sql, [del], (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Order by

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   let name = "p%";
//   let sql = "select * from customer where name like ? order by name";
//   let sql2 = "select * from customer where name like ? order by name desc";

//   con.query(sql, [name], (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });

//   con.query(sql2, [name], (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

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

// Add column to table with alter table

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");

//   let sql = "alter table customer add column product varchar(255)";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
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
