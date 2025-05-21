import type { Meta } from "@storybook/react";
import { InputField, type InputProps } from "./input-field";
import { InputContainer } from "./input-container";
import { InputLabel } from "./input-label";

export default {
  title: "Moléculas/Input",
  tags: ["autodocs"],
  component: InputField,
  argTypes: {
    success: {
      control: "boolean",
      description: "Estado de sucesso do input",
    },
    error: {
      control: "boolean",
      description: "Estado de erro do input",
    },
  },
  args: {},
} as Meta<InputProps>;

export function Default(args: InputProps) {
  return (
    <InputContainer>
      <InputLabel labelText="Label exemplo" labelFor="input-example-default" />
      <InputField
        id="input-example-default"
        name="input-example-default"
        placeholder="Digite aqui..."
        {...args}
      />
    </InputContainer>
  );
}

export function Disabled() {
  return (
    <InputContainer>
      <InputLabel labelText="Label exemplo" labelFor="input-example-disabled" />
      <InputField
        disabled
        id="input-example-disabled"
        name="input-example-disabled"
        placeholder="Digite aqui..."
      />
    </InputContainer>
  );
}

export function SuccessState() {
  return (
    <InputContainer>
      <InputLabel labelText="Label exemplo" labelFor="input-example-success" />
      <InputField
        success
        id="input-example-success"
        name="input-example-success"
        placeholder="Digite aqui..."
      />
    </InputContainer>
  );
}

export function ErrorState() {
  return (
    <InputContainer>
      <InputLabel labelText="Label exemplo" labelFor="input-example-error" />
      <InputField
        error
        id="input-example-error"
        name="input-example-error"
        placeholder="Digite aqui..."
      />
    </InputContainer>
  );
}
