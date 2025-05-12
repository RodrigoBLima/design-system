import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Button } from "./button";

describe("Button Component", () => {
  test("should render button by default", () => {
    render(<Button>Button</Button>);
    const button = screen.getByTestId("ui-button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  test("should render button with custom data-testid", () => {
    render(<Button data-testid="custom-id">Button</Button>);
    const button = screen.getByTestId("custom-id");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  test("should render Slot when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/">Link Button</a>
      </Button>,
    );
    const linkButton = screen.getByTestId("ui-button");
    expect(linkButton.tagName).toBe("A");
    expect(linkButton).toHaveAttribute("href", "/");
  });

  test("should applies correct variant and size classes", () => {
    const { rerender } = render(<Button variant="primary" size="small" />);
    const button = screen.getByTestId("ui-button");

    expect(button).toHaveClass("bg-primary text-white text-sm");

    rerender(<Button variant="secondary" size="medium" />);
    expect(button).toHaveClass("bg-secondary text-base");
  });

  test("should merge custom className with variant classes", () => {
    render(<Button className="custom-class" />);
    const button = screen.getByTestId("ui-button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("bg-primary");
  });

  test("should use additional props to button element", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} type="submit" aria-label="Test button" />);

    const button = screen.getByTestId("ui-button");
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "Test button");
  });

  test("shuld combines classes when using asChild with existing element", () => {
    render(
      <Button asChild className="extra-class">
        <div className="existing-class" />
      </Button>,
    );

    const divElement = screen.getByTestId("ui-button");
    expect(divElement).toHaveClass("existing-class");
    expect(divElement).toHaveClass("extra-class");
    expect(divElement).toHaveClass("bg-primary");
  });

  test("should applies disabled styles and attributes", () => {
    render(<Button disabled />);
    const button = screen.getByTestId("ui-button");

    expect(button).toHaveClass("disabled:bg-neutral-light disabled:text-white");
    expect(button).toBeDisabled();
  });
});
