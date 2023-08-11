require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

// Register

app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!(first_name && last_name && password && email)) {
      res.status(400).send("All input is required");
    }

    // check user

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User already exists");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create Token

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token

    user.token = token;

    // return new user

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

// Login

app.post("/login", async (req, res) => {
  try {
    // get user input

    const { email, password } = req.body;

    // Validate user input

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // create token

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save token
      user.token = token;

      res.status(201).json(user);
    }

    res.status(400).send("Invalid username");
  } catch (error) {
    console.log(error);
  }
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("welcome");
});

module.exports = app;
