import { AssetListView } from "../../../components/organism/AssetList/index";

export default {
  title: "Organisms/AssetList",
  component: AssetListView,
};

export const Default = {
  args: {
    assets: [
      { symbol: "BTC", amount: 2, price_paid: 25000 },
      { symbol: "ETH", amount: 5, price_paid: 1800 },
    ],
  },
};
