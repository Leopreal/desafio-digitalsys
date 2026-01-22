import { Label } from "../../atoms/Label/index";
import { Item, List } from "./styles";

type Asset = {
  symbol: string;
  amount: number;
  price_paid: number;
};

type Props = {
  assets: Asset[];
};

export function AssetListView({ assets }: Props) {
  return (
    <List>
      {assets.map((asset) => (
        <Item key={asset.symbol}>
          <Label>{asset.symbol}</Label>
          <Label>Quantidade: {asset.amount}</Label>
          <Label>Preço pago: {asset.price_paid}</Label>
        </Item>
      ))}
    </List>
  );
}
