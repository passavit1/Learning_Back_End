const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
const register = require("./src/register");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,x-access-token,x-refresh-token,_id"
  );
  res.header("Access-Control-Expose-Headers", "x-access-token,x-refresh-token");
  next();
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.get("/hello", async (req, res) => {
  res.json("hello world my first backend");
});

app.post("/register", async (req, res) => {
  register(req, res);
});