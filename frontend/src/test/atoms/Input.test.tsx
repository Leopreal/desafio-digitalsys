import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "../../components/atoms/Input";

describe("Input Atom", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Symbol" />);

    expect(screen.getByPlaceholderText("Symbol")).toBeInTheDocument();
  });

  it("allows typing", () => {
    render(<Input placeholder="Amount" />);

    const input = screen.getByPlaceholderText("Amount") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "10" } });

    expect(input.value).toBe("10");
  });

  it("can be disabled", () => {
    render(<Input placeholder="Disabled" disabled />);

    const input = screen.getByPlaceholderText("Disabled");
    expect(input).toBeDisabled();
  });
});
