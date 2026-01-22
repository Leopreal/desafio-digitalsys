import api from "./api.service";

export interface CreateAssetPayload {
  symbol: string;
  amount: number;
  price_paid: number;
}

export type Asset = {
  symbol: string;
  amount: number;
  price_paid: number;
};

export async function createAsset(payload: CreateAssetPayload): Promise<Asset> {
  const response = await api.post("/assets", payload);
  return response.data;
}

export async function getAssets(): Promise<Asset[]> {
  const response = await api.get("/assets");
  return response.data;
}
