import { Button } from "../../atoms/Button/index";
import { FormField } from "../../molecules/FormField/index";
import { FormContainer } from "./styles";
import React from "react";

interface TransactionFormViewProps {
  symbol: string;
  amount: string;
  onSymbolChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export const TransactionFormView = ({
  symbol,
  amount,
  onSymbolChange,
  onAmountChange,
  onSubmit,
  isLoading = false,
}: TransactionFormViewProps) => {
  return (
    <FormContainer>
      <FormField
        id="symbol"
        label="Nome"
        value={symbol}
        placeholder="BTC"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSymbolChange(e.target.value)
        }
      />

      <FormField
        id="amount"
        label="Valor"
        type="number"
        value={amount}
        placeholder="1000"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onAmountChange(e.target.value)
        }
      />

      <Button onClick={onSubmit} disabled={isLoading}>
        Salvar
      </Button>
    </FormContainer>
  );
};
