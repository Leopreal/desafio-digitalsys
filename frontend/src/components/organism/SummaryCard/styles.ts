import styled from "styled-components";

export const SummaryContainer = styled.div`
  background: linear-gradient(135deg, #1a1f3a 0%, #2d3548 100%);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid #374151;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const StatValue = styled.div<{ isProfit?: boolean; isLoss?: boolean }>`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${(props) => {
    if (props.isProfit) return "#10b981";
    if (props.isLoss) return "#ef4444";
    return "#fff";
  }};
`;
