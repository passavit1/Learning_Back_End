require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(express.json());

const config = process.env;
const port = config.PORT || 3000;

const user = [];

app.listen(port, () => {
  console.log(`this server is listening on ${port}`);
});

app.post("/user/create", async (req, res) => {
  let data = req.body;

  const checkUser = user.find((x) => x.username === data.username);
  if (checkUser) return res.status(200).json({ message: "user duplicated" });

  const token = await jwt.sign({ username: data.username }, config.TOKEN_KEY, {
    expiresIn: "1h",
  });

  const encryptedPWD = await bcrypt.hash(data.password, 10);

  data.password = encryptedPWD;
  data._token = token;
  user.push(data);

  console.log(data);

  res.status(200).json({ message: "Create user successfully", token: token });
});

app.get("/user/data", (req, res) => {
  res.status(200).send(user);
});

app.put("/user/edit/:username", (req, res) => {
  const pointer = req.params.username;
  const newData = req.body;

  const checkUser = user.find((x) => x.username === pointer);

  if (!checkUser) return res.status(401).json({ message: "user not found" });

  Object.assign(checkUser, newData);
  res.status(200).json({ message: "Update new data successful" });
});
