require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const config = process.env;
const port = config.PORT || 3000;

app.listen(port, () => {
  console.log(` This server is listening on ${port}`);
});

const todos = [];

app.get("/", (req, res) => {
  res.status(200).json(todos);
});

app.post("/new", (req, res) => {
  const data = req.body;
  todos.push(data);
  res.status(200).json({ message: "Success add new todo list!", data: data });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  const oldData = todos.find((x) => x.id === id);
  if (!oldData) return res.status(404).json({ error: "Todo not found" });

  Object.assign(oldData, newData);
  res.status(200).json({ message: "Success update", data: newData });
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const oldData = todos.findIndex((x) => x.id === id);
  if (oldData === -1) return res.status(404).json({ error: "Todo not found" });

  const remove = todos.splice(oldData, 1);
  res.json(remove);
});
