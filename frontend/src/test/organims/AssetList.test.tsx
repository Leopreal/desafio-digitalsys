import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AssetListContainer } from "./AssetListContainer";
import * as assetService from "@/services/assets.service";

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
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("25000")).toBeInTheDocument();

    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("1800")).toBeInTheDocument();
  });

  it("shows empty state when no assets are returned", async () => {
    vi.spyOn(assetService, "getAssets").mockResolvedValueOnce([]);

    render(<AssetListContainer />);

    expect(
      await screen.findByText(/nenhum asset encontrado/i),
    ).toBeInTheDocument();
  });

    render(<AssetListContainer />);
  });
});
