import Button from "./button";
import { ThemeProvider } from "./context/ThemeContext";
import { UsersList } from "./UsersList";

function App() {
  return (
    <ThemeProvider>
      <Button></Button>
      <UsersList />
    </ThemeProvider>
  );
}

export default App;
