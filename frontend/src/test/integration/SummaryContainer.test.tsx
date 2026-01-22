import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SummaryContainer } from './SummaryContainer';
import * as assetsService from '../../services/assets.service';

vi.mock('../../services/assets.service');

describe('SummaryContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show loading state initially', () => {
    vi.mocked(assetsService.fetchSummary).mockImplementation(
      () => new Promise(() => {})
    );

    render(<SummaryContainer />);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it('should fetch and display summary data', async () => {
    const mockData = {
      total_invested: 15500,
      total_current_value: 21500,
      total_assets: 2,
      assets: [],
    };

    vi.mocked(assetsService.fetchSummary).mockResolvedValue(mockData);

    render(<SummaryContainer />);

    await waitFor(() => {
      expect(screen.getByText(/15.500/)).toBeInTheDocument();
      expect(screen.getByText(/21.500/)).toBeInTheDocument();
    });
  });

  it('should display error message when API fails', async () => {
    vi.mocked(assetsService.fetchSummary).mockRejectedValue(
      new Error('API Error')
    );

    render(<SummaryContainer />);

    await waitFor(() => {
      expect(screen.getByText(/erro ao carregar/i)).toBeInTheDocument();
    });
  });
});