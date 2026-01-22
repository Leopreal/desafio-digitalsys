import React from "react";
import {
  SummaryContainer,
  Title,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
} from "./styles";

export interface SummaryCardProps {
  totalInvested: number;
  totalCurrentValue: number;
  totalAssets: number;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  totalInvested,
  totalCurrentValue,
  totalAssets,
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(value));
  };

  return (
    <SummaryContainer>
      <Title>📊 Resumo da Carteira</Title>

      <StatsGrid>
        <StatCard>
          <StatLabel>Total Investido</StatLabel>
          <StatValue>R$ {formatCurrency(totalInvested)}</StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>Valor Atual</StatLabel>
          <StatValue>R$ {formatCurrency(totalCurrentValue)}</StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>Total de Ativos</StatLabel>
          <StatValue>
            {totalAssets} {totalAssets === 1 ? "ativo" : "ativos"}
          </StatValue>
        </StatCard>
      </StatsGrid>
    </SummaryContainer>
  );
};
