const express = require("express");

const app = express();
app.use(express.json());

const assets = [];

app.post("/assets", (req, res) => {
  assets.push(req.body);
  res.status(201).send();
});

app.get("/assets", (req, res) => {
  res.status(200).json(assets);
});

module.exports = app;
