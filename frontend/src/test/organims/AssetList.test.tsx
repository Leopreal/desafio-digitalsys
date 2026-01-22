import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AssetListContainer } from "../../containers/AssetListContainer";
import * as assetService from "../../services/assets.service";

describe("AssetList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches assets and displays them", async () => {
    vi.spyOn(assetService, "getAssets").mockResolvedValueOnce([
      {
        symbol: "BTC",
        amount: 2,
        price_paid: 25000,
      },
      {
        symbol: "ETH",
        amount: 5,
        price_paid: 1800,
      },
    ]);

    render(<AssetListContainer />);

    expect(await screen.findByText("BTC")).toBeInTheDocument();
    expect(screen.getByText(/Quantidade:\s*2/i)).toBeInTheDocument();
    expect(screen.getByText(/Preço pago:\s*25000/i)).toBeInTheDocument();

    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText(/Quantidade:\s*5/i)).toBeInTheDocument();
    expect(screen.getByText(/Preço pago:\s*1800/i)).toBeInTheDocument();
  });

  it("shows empty state when no assets are returned", async () => {
    vi.spyOn(assetService, "getAssets").mockResolvedValueOnce([]);

    render(<AssetListContainer />);

    expect(
      await screen.findByText(/nenhum asset encontrado/i),
    ).toBeInTheDocument();
  });
});
