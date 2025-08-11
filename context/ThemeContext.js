import { createContext, useState, useEffect } from 'react';

/**
 * ThemeContext provides dark/light mode and accent colour state throughout the app.
 * The provider synchronises user preferences with localStorage and updates
 * the document body classes accordingly.
 */
export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('dark');
  const [color, setColor] = useState('blue');

  // Load stored preferences on first render
  useEffect(() => {
    const storedMode = typeof window !== 'undefined' ? localStorage.getItem('themeMode') : null;
    const storedColor = typeof window !== 'undefined' ? localStorage.getItem('colorTheme') : null;
    if (storedMode) setMode(storedMode);
    if (storedColor) setColor(storedColor);
  }, []);

  // Update body classes and persist preferences when mode or colour changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const body = document.body;
      // Remove previously set classes
      body.classList.remove('theme-dark', 'theme-light', 'theme-blue', 'theme-purple', 'theme-green');
      body.classList.add(`theme-${mode}`);
      body.classList.add(`theme-${color}`);
      // Persist values
      localStorage.setItem('themeMode', mode);
      localStorage.setItem('colorTheme', color);
    }
  }, [mode, color]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setColorTheme = (c) => setColor(c);

  return (
    <ThemeContext.Provider value={{ mode, color, toggleMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}