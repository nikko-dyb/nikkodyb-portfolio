/*
 * Skripter som forbedrer navigasjonen på siden. Dette skriptet legger til
 * jevn rulling til seksjonene når man klikker på lenker i navigasjonsmenyen,
 * og markerer den aktive lenken basert på hvilken seksjon som er i fokus.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Marker aktiv navigasjonslenke basert på seksjon i fokus. Vi bruker
  // IntersectionObserver med tilpasset rootMargin for å unngå scroll-lyttere.
  const sections = [...document.querySelectorAll('section[id]')];
  const navMap = new Map(sections.map(s => [s.id, document.querySelector(`.navbar a[href="#${s.id}"]`)]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navMap.forEach(a => a?.classList.remove('active'));
        const link = navMap.get(e.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => io.observe(s));

  /*
   * Språkbytte‑funksjonalitet
   * Vi lagrer valgt språk i localStorage. Body‑klassen avgjør hvilke
   * elementer (lang-no/lang-en) som vises via CSS. Knappen viser
   * navnet på det andre språket for å indikere at man kan bytte til det.
   */
  const langToggle = document.getElementById('lang-toggle');
  const body = document.body;
  let currentLang = localStorage.getItem('lang') || 'no';

  // Sett initialt språk basert på lagret verdi eller standard
  setLanguage(currentLang);

  // Håndter klikk på språkknapp
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'no' ? 'en' : 'no';
      setLanguage(currentLang);
      localStorage.setItem('lang', currentLang);
    });
  }

  function setLanguage(lang) {
    body.classList.remove('lang-no', 'lang-en');
    body.classList.add(`lang-${lang}`);
    document.documentElement.setAttribute('lang', lang);
    // Oppdater aria-pressed for språkknappen: true når engelsk er aktivt
    if (langToggle) {
      langToggle.setAttribute('aria-pressed', lang === 'en');
    }
  }

  /*
   * Tema‑modus (mørk/lys) og aksentfarge.
   * Vi lagrer både temaet (dark/light) og fargeskjemaet (blue/purple/green)
   * i localStorage slik at brukerens preferanser beholdes.
   */
  const themeToggle = document.getElementById('theme-toggle');
  const colorButtons = document.querySelectorAll('.color-btn');

  // Les lagrede temaer eller bruk standarder
  let currentMode = localStorage.getItem('themeMode') || 'dark';
  let currentColor = localStorage.getItem('colorTheme') || 'blue';

  // Sett initiale klasser
  setThemeMode(currentMode);
  setColorTheme(currentColor);

  // Håndter klikk på tema-toggle (mørk/lys)
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentMode = currentMode === 'dark' ? 'light' : 'dark';
      setThemeMode(currentMode);
      localStorage.setItem('themeMode', currentMode);
    });
  }

  // Håndter klikk på fargeknapper (aksentfarger)
  if (colorButtons) {
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-theme');
        if (selected) {
          currentColor = selected;
          setColorTheme(currentColor);
          localStorage.setItem('colorTheme', currentColor);
        }
      });
    });
  }

  function setThemeMode(mode) {
    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(`theme-${mode}`);
    // Oppdater aria-pressed: true når lys modus er aktiv
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', mode === 'light');
    }
  }

  function setColorTheme(theme) {
    body.classList.remove('theme-blue', 'theme-purple', 'theme-green');
    body.classList.add(`theme-${theme}`);
  }

  // Legg til tastaturstøtte for Enter og Space på toggleknapper
  const toggles = [];
  if (langToggle) toggles.push(langToggle);
  if (themeToggle) toggles.push(themeToggle);
  toggles.forEach(btn => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});