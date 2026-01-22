import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TransactionFormContainer } from "../../containers/TransactionFormContainer";
import * as assetService from "../../services/assets.service";

describe("TransactionForm", () => {
  it("submits the form and calls createAsset with correct data", async () => {
    const createAssetMock = vi
      .spyOn(assetService, "createAsset")
      .mockResolvedValueOnce({ symbol: "BTC", amount: 1000, price_paid: 0 });

    render(<TransactionFormContainer />);

    const nameInput = screen.getByLabelText(/nome/i);
    const amountInput = screen.getByLabelText(/valor/i);
    const submitButton = screen.getByRole("button", { name: /salvar/i });

    await userEvent.type(nameInput, "BTC");
    await userEvent.type(amountInput, "1000");
    await userEvent.click(submitButton);

    expect(createAssetMock).toHaveBeenCalledWith({
      symbol: "BTC",
      amount: 1000,
      price_paid: 0,
    });
  });
});
