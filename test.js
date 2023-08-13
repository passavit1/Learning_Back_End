const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;

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
  // ... and so on
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
  const itemID = req.params.id;
  const updateItem = req.body;

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

// server listening

app.listen(port, () => {
  console.log(`this server listening on port ${port}`);
});
