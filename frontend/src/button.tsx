import useTheme from "./hooks/useTheme";

const Button = () => {
  const { theme, toggleTheme } = useTheme();

  return <div onClick={toggleTheme}>Theme: {theme}</div>;
};

export default Button;
