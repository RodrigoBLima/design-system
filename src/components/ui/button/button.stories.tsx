import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./button";

export default {
  title: "Moléculas/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    children: {
      description: "O conteúdo do botão",
      type: "string",
    },
    variant: {
      description: "O estilo do botão",
      options: ["primary", "secondary", "tertiary", "ghost", "danger"],
      control: { type: "radio" },
    },
    size: {
      description: "O tamanho do botão",
      options: ["large", "medium", "small"],
    },
    asChild: {
      table: { disable: true },
    },
    disabled: {
      description: "Desabilitado o clique",
      type: "boolean",
    },
  },
} as Meta<ButtonProps>;

export const Preview: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
  },
};

export const Variants: StoryObj<ButtonProps> = {
  render: () => (
    <div className="flex gap-2">
      <Button>Botão</Button>
      <Button variant="secondary">Botão</Button>
      <Button variant="tertiary">Botão</Button>
      <Button variant="ghost">Botão</Button>
      <Button variant="danger">Botão</Button>
      <Button disabled>Botão</Button>
    </div>
  ),
  argTypes: {
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
    children: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};

export const Sizes: StoryObj<ButtonProps> = {
  render: () => (
    <div className="flex gap-2">
      <Button size="small">Botão</Button>
      <Button>Botão</Button>
      <Button size="large">Botão</Button>
    </div>
  ),
  argTypes: {
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
    children: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
        Botão
      </>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Botão
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};
