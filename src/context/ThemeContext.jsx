import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ChangeThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useChangeTheme = () => {
  return useContext(ChangeThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ChangeThemeContext.Provider value={setDarkTheme}>
        {children}
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
