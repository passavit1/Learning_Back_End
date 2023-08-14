const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

// Apply rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per windowMs
  message: "claim down it limit wait for 1 minute",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).send("API is working");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
