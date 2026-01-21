import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "../../components/atoms/Label";

describe("Label Atom", () => {
  it("renders the text", () => {
    render(<Label>My Label</Label>);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });
});
