import { createContext, useState, useEffect } from 'react';

/**
 * LangContext manages the current language (Norwegian vs English).
 * It toggles body classes to show the correct language elements in CSS and
 * sets the lang attribute on the HTML element for accessibility and SEO.
 */
export const LangContext = createContext({});

export function LangProvider({ children }) {
  const [lang, setLang] = useState('no');

  // Load stored language preference if present
  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  // Update document lang attribute and body classes on change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.body.classList.remove('lang-no', 'lang-en');
      document.body.classList.add(`lang-${lang}`);
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'no' ? 'en' : 'no'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}