const express = require("express");
const cors = require("cors");
const User = require("./db");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const userData = req.body;
  console.log("Received user data:", userData);

  try {
    const newUser = new User(userData);
    const result = await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      insertedId: result._id,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "An error occurred while registering user" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
