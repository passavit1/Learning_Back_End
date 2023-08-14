require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const config = process.env;

app.use(express.json());

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
];

// get data

app.get("/getdata", (req, res) => {
  res.json(data);
});

// create data

app.post("/writedata", async (req, res) => {
  const newItem = req.body;

  if (newItem && newItem.password) {
    newItem.password = await bcrypt.hash(newItem.password, 10);
  }

  data.push(newItem);
  res.status(200).json({ message: `Item added`, newItem: newItem });
});

// update - put method

app.put("/edit/:id", (req, res) => {
  const itemID = parseInt(req.params.id);
  const updateItem = req.body;

  console.log(data);
  console.log(`itemID :`, itemID);

  const itemToUpdate = data.find((item) => item.id === itemID);
  if (!itemToUpdate) {
    return res.status(404).json({ error: "Item not found" });
  }

  Object.assign(itemToUpdate, updateItem); // merge 2 items (target , update)
  console.log(`after :`, data);
  res.json(itemToUpdate);
});

// Delete

app.delete("/delete/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = data.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = data.splice(itemIndex, 1);
  res.json(deletedItem);
});

// Pagination

app.get("/Pagination", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsOnPage = data.slice(startIndex, endIndex);

  res.json(itemsOnPage);
});

// Authentication Middleware

const users = [];

app.get("/user/data", (req, res) => {
  res.status(200).json(users);
});

app.post("/user/create", (req, res) => {
  const detail = req.body;

  const existingUser = users.find((user) => user.username === detail.username);
  if (existingUser) {
    return res.status(200).json({ message: "User already exists" });
  }

  const token = jwt.sign({ username: detail.username }, config.TOKEN_KEY, {
    expiresIn: "1h",
  });

  detail.token = token;
  users.push(detail);

  res.status(201).json(detail);
});

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "token incorrect" });
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

// server listening

app.listen(port, () => {
  console.log(`this server listening on port ${port}`);
});
