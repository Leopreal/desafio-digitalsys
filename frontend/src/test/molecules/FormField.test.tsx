import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormField } from "./FormField";

describe("FormField Molecule", () => {
  it("renders label and input", () => {
    render(
      <FormField
        label="Asset Symbol"
        placeholder="BTC"
      />
    );

    expect(screen.getByText("Asset Symbol")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("BTC")).toBeInTheDocument();
  });
});