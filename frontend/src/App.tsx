import Button from "./button";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Button></Button>
    </ThemeProvider>
  );
}

export default App;
