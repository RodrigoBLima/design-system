import { Button, InputField, InputContainer, InputLabel } from "./components";

function App() {
  return (
    <section data-testid="app-container">
      <h1 className="text-3xl font-bold underline">Design system</h1>

      <InputField />

      <InputContainer>
        <InputLabel labelText="labelText" labelFor="input-success" />
        <InputField id="input-success" name="input-success" success />
      </InputContainer>

      <InputContainer>
        <InputLabel labelText="labelText" labelFor="input-error" />
        <InputField id="input-error" name="input-error" error />
      </InputContainer>

      <Button variant="primary" size="medium">
        Button
      </Button>
      <Button variant="secondary">Button</Button>
      <Button variant="tertiary">Button</Button>
      <Button variant="danger" size="large">
        Button
      </Button>
      <Button variant="ghost">Button</Button>
    </section>
  );
}

export default App;
