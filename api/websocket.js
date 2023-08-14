require("dotenv").config();

const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  ws.send("Connected to the WebSocket server");
});

app.get("/", (req, res) => {
  res.status(200).send("WebSocket Server is running");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
