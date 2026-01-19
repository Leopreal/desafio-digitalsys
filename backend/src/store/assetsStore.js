let assets = [];

function getAssets() {
  return assets;
}

function addAsset(asset) {
  assets.push(asset);
}

function clearAssets() {
  assets = [];
}

module.exports = {
  getAssets,
  addAsset,
  clearAssets,
};
