import { render, screen } from "@testing-library/react";
import { Terminal } from "lucide-react";
import { describe, test, expect } from "vitest";
import { Alert } from "./alert";

describe("AlertContainer Component", () => {
  test("renders title, description and icons correctly", () => {
    render(
      <Alert.Container variant="danger">
        <Terminal data-testid="icon-left" className="h-4 w-4" />
        <Alert.Content>
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>This is a danger message.</Alert.Description>
        </Alert.Content>
        <Terminal data-testid="icon-right" className="h-4 w-4" />
      </Alert.Container>,
    );

    expect(screen.getByText("Heads up!")).toBeVisible();
    expect(screen.getByText("This is a danger message.")).toBeVisible();
    expect(screen.getAllByTestId("icon-left")).toHaveLength(1);
    expect(screen.getAllByTestId("icon-right")).toHaveLength(1);
  });
});
