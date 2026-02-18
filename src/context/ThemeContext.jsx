import { createContext, useState, useEffect, useCallback } from "react";
import { themes } from "@/config/themes";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("preschool-theme") || "sunshine";
    }
    return "sunshine";
  });

  const switchTheme = useCallback((themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem("preschool-theme", themeId);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const activeTheme = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchTheme,
        activeTheme,
        themes,
        isDark: currentTheme === "night-owl",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};