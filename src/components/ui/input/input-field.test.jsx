import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputField } from "./input-field";
import userEvent from "@testing-library/user-event";

describe("Inputfield Component", () => {
  test("should render simple input", () => {
    render(<InputField />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
  });

  test("should render input with status success", () => {
    render(<InputField success />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input.className).toMatch(/border-success/i);
  });

  test("should render input with status error", () => {
    render(<InputField error />);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input.className).toMatch(/border-danger/i);
  });

  test("should user type text on input", async () => {
    const user = userEvent.setup();
    render(<InputField id="test-input" name="test-input" />);
    const input = screen.getByRole("textbox");
    await user.type(input, "Olá mundo!");
    expect(input).toHaveValue("Olá mundo!");
  });

  test('should render type="email"', () => {
    render(<InputField type="email" id="email" name="email" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  test('should render type="password"', () => {
    render(
      <InputField
        type="password"
        id="password"
        name="password"
        data-testid="password"
      />,
    );
    const input = screen.getByTestId("password");
    expect(input).toHaveAttribute("type", "password");
  });
});
