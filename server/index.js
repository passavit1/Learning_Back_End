const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.get("/hello", async (req, res) => {
  res.json("hello world my first backend");
});
