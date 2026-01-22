import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SummaryContainer } from "../../containers/SummaryContainer";
import * as summaryService from "../../services/summary.service";

vi.mock("../../services/summary.service");

describe("SummaryContainer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show loading state initially", () => {
    vi.mocked(summaryService.getSummary).mockImplementation(
      () => new Promise(() => {}),
    );

    render(<SummaryContainer />);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it("should fetch and display summary data", async () => {
    const mockData = {
      total_invested: 21300,
      total_current_value: 21500,
      total_assets: 2,
      assets: [
        { symbol: "BTC", amount: 2, price_paid: 25000 },
        { symbol: "ETH", amount: 5, price_paid: 1800 },
      ],
    };

    vi.mocked(summaryService.getSummary).mockResolvedValue(mockData);

    render(<SummaryContainer />);

    await waitFor(() => {
      expect(
        screen.getByText((content) => content.includes("21.300")),
      ).toBeInTheDocument();

      expect(
        screen.getByText((content) => content.includes("21.500")),
      ).toBeInTheDocument();

      expect(screen.getByText(/2 ativos/i)).toBeInTheDocument();
    });
  });
});
