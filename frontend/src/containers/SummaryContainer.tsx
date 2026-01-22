import { useEffect, useState } from "react";
import { SummaryCard } from "../components/organism/SummaryCard/index";
import { getSummary, SummaryResponse } from "../services/summary.service";

export const SummaryContainer = () => {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      setIsLoading(true);

      const data = await getSummary();
      setSummary(data);
    } catch (err) {
      console.error("Error fetching summary:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return "⏳ Carregando resumo...";
  }

  if (!summary) {
    return <div>Nenhum resumo disponível</div>;
  }

  return (
    <SummaryCard
      totalInvested={summary.total_invested}
      totalCurrentValue={summary.total_current_value}
      totalAssets={summary.total_assets}
    />
  );
};
