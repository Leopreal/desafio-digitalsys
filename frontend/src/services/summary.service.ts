import api from "./api.service";

// escalavelmente fazer um arquivo types para tipos compartilhados entre services
export interface SummaryResponse {
  total_invested: number;
  total_current_value: number;
  total_assets: number;
  assets: Array<{
    symbol: string;
    amount: number;
    price_paid: number;
  }>;
}

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await api.get("/summary");

  if (!response.data) {
    throw new Error("Failed to fetch summary");
  }

  return response.data;
};
