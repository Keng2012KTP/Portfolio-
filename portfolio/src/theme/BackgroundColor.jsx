import { useThemeContext } from "../context/theme-context";

const BackgroundColor = ({ className }) => {
  const { ThemeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => ThemeHandler(className)}
    ></button>
  );
};

export default BackgroundColor;
