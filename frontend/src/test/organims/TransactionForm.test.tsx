// src/components/features/TransactionForm/TransactionForm.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TransactionForm } from "./TransactionForm";
import * as assetService from "@/services/assets.service";

describe("TransactionForm", () => {
  it("submits the form and calls createAsset with correct data", async () => {
    const createAssetMock = vi
      .spyOn(assetService, "createAsset")
      .mockResolvedValueOnce({ id: 1 });

    render(<TransactionForm />);

    const nameInput = screen.getByLabelText(/nome/i);
    const amountInput = screen.getByLabelText(/valor/i);
    const submitButton = screen.getByRole("button", { name: /salvar/i });

    await userEvent.type(nameInput, "BTC");
    await userEvent.type(amountInput, "1000");
    await userEvent.click(submitButton);

    expect(createAssetMock).toHaveBeenCalledWith({
      name: "BTC",
      amount: 1000,
    });
  });
});
