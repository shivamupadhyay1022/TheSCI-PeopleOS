import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || THEMES.LIGHT;
  });

  // Apply theme when it changes
  useEffect(() => {
    const html = document.documentElement;

    if (theme === THEMES.DARK) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggletheme = () => {
    setTheme(prevTheme =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  };

  // Function to set a specific theme
  const setThemeMode = (newTheme) => {
    if (Object.values(THEMES).includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
