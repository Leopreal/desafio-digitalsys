const mockPrices = require("../data/assets.json");

function buildSummary(assets) {
  const total_invested = assets.reduce(
    (acc, asset) => acc + asset.amount * asset.price_paid,
    0,
  );

  const assetsWithCurrentValues = assets.map((asset) => {
    const current_price = mockPrices[asset.symbol];
    const current_value = asset.amount * current_price;
    return {
      ...asset,
      current_price,
      current_value,
    };
  });

  const total_current_value = assetsWithCurrentValues.reduce(
    (acc, asset) => acc + asset.current_value,
    0,
  );

  return {
    total_invested,
    total_current_value,
    total_assets: assets.length,
    assets: assetsWithCurrentValues,
  };
}

module.exports = { buildSummary };
