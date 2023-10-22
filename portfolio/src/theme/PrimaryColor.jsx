import { useThemeContext } from "../context/theme-context";

const PrimaryColor = ({ className }) => {
  const { ThemeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => ThemeHandler(className)}
    ></button>
  );
};

export default PrimaryColor;
