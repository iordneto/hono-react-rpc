import { createContext, useState, type PropsWithChildren } from "react";

type ThemeContext = {
  toggleTheme: () => void;
  theme: string;
};
const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "" ? "dark" : "";
      document.documentElement.classList = newTheme;

      return newTheme;
    });
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
