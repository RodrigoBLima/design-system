import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Terminal, X } from "lucide-react";
import { Alert } from "./alert";

describe("Alert exports", () => {
  test("renders title, description and left icon", () => {
    render(
      <Alert.Container variant="warning">
        <Terminal data-testid="icon-left" className="h-4 w-4" />
        <Alert.Content>
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>This is a warning message.</Alert.Description>
        </Alert.Content>
      </Alert.Container>,
    );

    expect(screen.getByText("Heads up!")).toBeVisible();
    expect(screen.getByText("This is a warning message.")).toBeVisible();
    expect(screen.getAllByTestId("icon-left")).toHaveLength(1);
  });

  test("renders title, description and right icon", () => {
    render(
      <Alert.Container variant="success" data-testid="alert">
        <Alert.Content>
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>This is a success message.</Alert.Description>
        </Alert.Content>
        <X data-testid="icon-right" className="h-4 w-4" />
      </Alert.Container>,
    );

    expect(screen.getByTestId("alert")).toBeVisible(1);
    expect(screen.getByText("This is a success message.")).toBeVisible();
    expect(screen.getAllByTestId("icon-right")).toHaveLength(1);
  });
});
