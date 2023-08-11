const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json()); // convert json object to javascript object

// MySQL connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mysql_nodejs",
  port: "8889",
});

connection.connect((err) => {
  if (err) throw console.error(err);
  console.log("connected");
});

// create routes

app.post("/create", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    connection.query(
      `INSERT INTO users (email , fullname , password) VALUES (?, ?, ?)`,
      [email, name, password],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: "Error creating user" });
        }
        return res
          .status(201)
          .json({ message: "New user successfully created" });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Read

app.get("/read", async (req, res) => {
  try {
    let sql = `select * from users`;

    await connection.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: "Error Reading user" });
      }

      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Read from param

app.get("/read/single/:email", async (req, res) => {
  const email = req.params.email;
  try {
    let sql = `select * from users where email = ?`;

    await connection.query(sql, [email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: "Error Reading user" });
      }

      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//Update

app.patch("/update/:email", async (req, res) => {
  const email = req.params.email;
  const newPassword = req.body.newPassword;

  try {
    let sql = `update users set password = ? where email = ? `;
    let param = [newPassword, email];

    await connection.query(sql, param, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: "Error Reading user" });
      }

      res.status(200).json({ message: "User update password successfully" });
    });
  } catch (error) {}
});

// Delete

app.delete("/delete/:email", async (req, res) => {
  const email = req.params.email;

  try {
    let sql = `delete from users where email= ?`;
    let param = [email];

    await connection.query(sql, param, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: "Error delete user" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "no user with that email" });
      }

      return res.status(200).json({ message: "user deleted successfully" });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
});

app.listen(3000, () => console.log(`this server is listening on port 3000`));
