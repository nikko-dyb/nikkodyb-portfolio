import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';

/**
 * Navbar component renders the top navigation bar with links to page sections,
 * colour selectors, theme toggle and language toggle.  It highlights the
 * currently visible section using IntersectionObserver so that the user can
 * easily see where they are on the page.  Accessible attributes like
 * aria-pressed are used to reflect the active state of toggles.
 */
export default function Navbar() {
  const { mode, toggleMode, setColorTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);
  const navItems = [
    { id: 'about', no: 'Om meg', en: 'About' },
    { id: 'cv', no: 'CV', en: 'CV' },
    { id: 'projects', no: 'Prosjekter', en: 'Projects' },
    { id: 'contact', no: 'Kontakt', en: 'Contact' }
  ];
  const [active, setActive] = useState('');

  // Observe sections to update the active nav link.  The observer is set up
  // on mount and cleaned up on unmount.  The rootMargin values make the
  // highlight change a bit before the section reaches the middle of the
  // viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Labels for toggles depending on the current state
  const themeLabel = mode === 'dark' ? (lang === 'no' ? 'Lys modus' : 'Light mode') : (lang === 'no' ? 'Mørk modus' : 'Dark mode');
  const langLabel = lang === 'no' ? 'English' : 'Norsk';

  return (
    <nav className="navbar">
      <a href="#hero" className="logo">NHD</a>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>
              {lang === 'no' ? item.no : item.en}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        {/* Accent colour selector */}
        <div className="color-select" aria-label={lang === 'no' ? 'Velg farge' : 'Choose accent colour'}>
          <button
            className="color-btn color-blue"
            onClick={() => setColorTheme('blue')}
            aria-label={lang === 'no' ? 'Blå aksent' : 'Blue accent'}
          />
          <button
            className="color-btn color-purple"
            onClick={() => setColorTheme('purple')}
            aria-label={lang === 'no' ? 'Lilla aksent' : 'Purple accent'}
          />
          <button
            className="color-btn color-green"
            onClick={() => setColorTheme('green')}
            aria-label={lang === 'no' ? 'Grønn aksent' : 'Green accent'}
          />
        </div>
        {/* Theme toggle */}
        <button
          id="theme-toggle"
          className="theme-toggle"
          onClick={toggleMode}
          aria-label={themeLabel}
          aria-pressed={mode === 'light'}
        >
          {mode === 'dark' ? '🌙' : '☀️'}
        </button>
        {/* Language toggle */}
        <button
          id="lang-toggle"
          className="language-toggle"
          onClick={toggleLang}
          aria-label="Toggle language"
          aria-pressed={lang === 'en'}
        >
          {langLabel}
        </button>
      </div>
    </nav>
  );
}