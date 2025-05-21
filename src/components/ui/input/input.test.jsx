import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import React from "react";

import { Input } from "./input";

describe("Input exports", () => {
  test("should render InputField via Input", () => {
    render(<Input.Field id="test-input" name="test" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("id", "test-input");
  });

  test("should render InputContainer + InputLabel + InputField by Input", () => {
    render(
      <Input.Container>
        <Input.Label labelText="Label Test" labelFor="input-id" />
        <Input.Field id="input-id" name="input-name" />
      </Input.Container>,
    );

    const label = screen.getByText("Label Test");
    const input = screen.getByLabelText("Label Test");

    expect(label).toBeVisible();
    expect(input).toBeVisible();
  });
});
