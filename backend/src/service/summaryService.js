function buildSummary(assets) {
  const total_invested = assets.reduce(
    (acc, asset) => acc + asset.amount * asset.price_paid,
    0,
  );

  return {
    total_invested,
    total_assets: assets.length,
    assets,
  };
}

module.exports = { buildSummary };
