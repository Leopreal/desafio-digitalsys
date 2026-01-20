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

app.get("/summary", (req, res) => {
  const assets = getAssets();
  const total_invested = assets.reduce(
    (sum, asset) => sum + asset.amount * asset.price_paid,
    0,
  );
  res.status(200).json({ total_invested, total_assets: assets.length, assets });
});

module.exports = app;
