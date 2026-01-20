const express = require("express");
const { getAssets, addAsset } = require("./store/assetsStore");
const { buildSummary } = require("./service/summaryService");

const app = express();
app.use(express.json());

app.post("/assets", (req, res) => {
  addAsset(req.body);
  res.status(201).send();
});

app.get("/assets", (req, res) => {
  res.status(200).json(getAssets());
});

app.get("/summary", (req, res) => {
  const assets = getAssets();
  const summary = buildSummary(assets);

  res.status(200).json(summary);
});

module.exports = app;
