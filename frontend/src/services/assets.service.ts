export interface CreateAssetPayload {
  symbol: string;
  amount: number;
  price_paid: number;
}

export async function createAsset(payload: CreateAssetPayload) {
  const response = await fetch("http://localhost:3000/assets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create asset");
  }

  return response.json();
}
