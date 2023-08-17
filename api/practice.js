require("dotenv").config();

const express = require("express");
const app = express();
const config = process.env;
const port = config.PORT;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.listen(port, () => {
  console.log(`This port is listening on ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/create", async (req, res) => {
  const data = req.body;

  const encryptedPWD = await bcrypt.hash(data?.password, 10);
  data.password = encryptedPWD;

  const JWT_Token = jwt.sign(data, config.TOKEN_KEY, {
    expiresIn: "1h",
  });

  delete data?.password;
  data.token = JWT_Token;
  users.push(data);
  res.status(200).json({ message: "create successfully" });
});

app.get("/data", (req, res) => {
  res.status(200).send(users);
});

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const loginUser = req.body;

  if (!token) {
    return res.status(403).json({ message: "Token missing" });
  }

  try {
    const checkUser = users.find((x) => x.username === loginUser.username);

    if (!checkUser) return res.status(403).json({ message: "User not found" });

    const decoded = jwt.verify(token, config.TOKEN_KEY);
    const checkPWD = await bcrypt.compare(loginUser.password, decoded.password);

    if (checkPWD) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ error: "password or username wrong" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});
