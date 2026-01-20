const { getAssets } = require("../store/assetsStore");
const { buildSummary } = require("../services/summaryService");

app.get("/summary", (req, res) => {
  const assets = getAssets();
  const summary = buildSummary(assets);

  res.status(200).json(summary);
});