const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Connect to MongoDB
client.connect();

app.get("/", async (req, res) => {
  const collection = client.db("connect").collection("toFrontEnd");
  const docs = await collection.find().toArray();
  res.render("index", { docs });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
