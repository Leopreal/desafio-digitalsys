import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard Organism', () => {
  it('should render total invested', () => {
    render(
      <SummaryCard
        totalInvested={15500}
        totalCurrentValue={21500}
        totalAssets={2}
      />
    );

    expect(screen.getByText(/total investido/i)).toBeInTheDocument();
    expect(screen.getByText(/15.500/)).toBeInTheDocument();
  });

  it('should display total assets count', () => {
    render(
      <SummaryCard
        totalInvested={15500}
        totalCurrentValue={21500}
        totalAssets={3}
      />
    );

    expect(screen.getByText(/3.*ativos?/i)).toBeInTheDocument();
  });
});