import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error("");

  return themeContext;
}

export default useTheme;
