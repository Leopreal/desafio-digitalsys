const express = require("express");
const { getAssets, addAsset } = require("./store/assetsStore");

const app = express();
app.use(express.json());

app.post("/assets", (req, res) => {
  addAsset(req.body);
  res.status(201).send();
});

app.get("/assets", (req, res) => {
  res.status(200).json(getAssets());
});

module.exports = app;
