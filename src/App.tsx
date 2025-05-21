import {
  AlertContainer,
  AlertTitle,
  AlertDescription,
  InputField,
  InputContainer,
  InputLabel,
  AlertContent,
} from "./components";
import { Terminal, X } from "lucide-react";

function App() {
  return (
    <section data-testid="app-container">
      <h1 className="text-3xl font-bold underline">Design system</h1>
      <br />
      <InputField />
      <br />
      <InputContainer>
        <InputLabel labelText="labelText" labelFor="input-success" />
        <InputField id="input-success" name="input-success" success />
      </InputContainer>
      <br />
      <InputContainer>
        <InputLabel labelText="labelText" labelFor="input-error" />
        <InputField id="input-error" name="input-error" error />
      </InputContainer>
      <br />
      <AlertContainer variant="notification">
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </AlertContent>

        <Terminal className="h-4 w-4" />
      </AlertContainer>
      <br />
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
      <br />
      <AlertContainer variant="warning">
        <Terminal className="h-4 w-4" />
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </AlertContent>
      </AlertContainer>
      <br />
      <AlertContainer
        variant="success"
        className="[&>h5]:flex-1 [&>div]:flex-1"
      >
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </AlertContent>
        <X className="h-4 w-4 cursor-pointer" />
      </AlertContainer>
    </section>
  );
}

export default App;
