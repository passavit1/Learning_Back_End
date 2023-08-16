require("dotenv").config();

const express = require("express");
const app = express();
const config = process.env;
const jwt = require("jsonwebtoken");
+app.use(express.json());

const data = {
  name: "passavit",
  age: 3600,
};

// Encrypt

const token = jwt.sign(data, config.TOKEN_KEY, { expiresIn: "1h" });

console.log("JWT token : ", token);

// Decrypt

const verify_Token = jwt.verify(token, config.TOKEN_KEY);

console.log("Verify token : ", verify_Token);

// Middleware

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Authentication token : ", token);

  if (!token) {
    return res.status(410).json({ error: "not found token" });
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
