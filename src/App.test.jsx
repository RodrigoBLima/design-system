import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Container", () => {
  it("should render app container", () => {
    render(<App />);
    const container = screen.getByTestId("app-container");
    expect(container).toBeVisible();
  });
});
