import type { Meta } from "@storybook/react";
import { AlertContainer } from "./alert-container";
import { AlertContent } from "./alert-content";
import { AlertTitle } from "./alert.title";
import { AlertDescription } from "./alert.description";
import { Terminal, X } from "lucide-react";

export default {
  title: "Moléculas/Alert",
  tags: ["autodocs"],
  component: AlertContainer,
  argTypes: {
    variant: {
      description: "O estilo do alerta",
      options: ["notification", "danger", "warning", "success"],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "notification",
  },
} as Meta;

interface DefaultProps {
  args: {
    variant: "notification" | "danger" | "warning" | "success";
  };
}

export function Default(args: DefaultProps["args"]) {
  return (
    <AlertContainer {...args}>
      <Terminal className="h-4 w-4" />
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </AlertContent>
      <X className="h-4 w-4 cursor-pointer" />
    </AlertContainer>
  );
}

export function WithoutIcon(args: DefaultProps["args"]) {
  return (
    <AlertContainer {...args}>
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </AlertContent>
    </AlertContainer>
  );
}

export function Danger() {
  return (
    <AlertContainer variant="danger">
      <Terminal className="h-4 w-4" />
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </AlertContent>
      <X className="h-4 w-4 cursor-pointer" />
    </AlertContainer>
  );
}

export function Warning() {
  return (
    <AlertContainer variant="warning">
      <Terminal className="h-4 w-4" />
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </AlertContent>
      <X className="h-4 w-4 cursor-pointer" />
    </AlertContainer>
  );
}

export function Success() {
  return (
    <AlertContainer variant="success">
      <Terminal className="h-4 w-4" />
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </AlertContent>
      <X className="h-4 w-4 cursor-pointer" />
    </AlertContainer>
  );
}
