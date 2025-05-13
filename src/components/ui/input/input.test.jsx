import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import React from "react";

import { InputModule } from "./input";

describe("InputModule exports", () => {
  test("should render InputField via InputModule", () => {
    render(<InputModule.InputField id="test-input" name="test" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("id", "test-input");
  });

  test("should render InputContainer + InputLabel + InputField by InputModule", () => {
    render(
      <InputModule.InputContainer>
        <InputModule.InputLabel labelText="Label Test" labelFor="input-id" />
        <InputModule.InputField id="input-id" name="input-name" />
      </InputModule.InputContainer>,
    );

    const label = screen.getByText("Label Test");
    const input = screen.getByLabelText("Label Test");

    expect(label).toBeVisible();
    expect(input).toBeVisible();
  });
});
