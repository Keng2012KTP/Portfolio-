import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";
export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );
  const ThemeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeState.primary, themeState.background]);
  return (
    <ThemeContext.Provider value={{ themeState, ThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
