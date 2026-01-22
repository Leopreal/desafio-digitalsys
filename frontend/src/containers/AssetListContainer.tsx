import { useEffect, useState } from "react";
import { getAssets } from "../services/assets.service";
import { AssetListView } from "../components/organism/AssetList/index";

type Asset = {
  symbol: string;
  amount: number;
  price_paid: number;
};

export function AssetListContainer() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    async function loadAssets() {
      const data = await getAssets();
      setAssets(data);
    }

    loadAssets();
  }, []);
  if (assets.length === 0) {
    return <p>nenhum asset encontrado</p>;
  }

  return <AssetListView assets={assets} />;
}
