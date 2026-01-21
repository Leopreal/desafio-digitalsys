import { useState } from "react";
import { TransactionFormView } from "../components/organism/TransactionFormView/index";
import { createAsset } from "../services/assets.service";

export const TransactionFormContainer = () => {
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    await createAsset({
      symbol: symbol,
      amount: Number(amount),
      price_paid: 0,
    });

    setIsLoading(false);
    setSymbol("");
    setAmount("");
  };

  return (
    <TransactionFormView
      symbol={symbol}
      amount={amount}
      onSymbolChange={setSymbol}
      onAmountChange={setAmount}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
};
