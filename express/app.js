const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world fucking world");
});

app.get("/hello", (req, res) => {
  res.send("hello page");
});

app.listen(port, () => {
  console.log(`this server is listening on ${port}`);
});
