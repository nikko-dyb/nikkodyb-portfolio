import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

/**
 * Hero component presents the introductory banner with a headline,
 * a short description and a call to action.  It uses the current
 * language from LangContext to display Norwegian or English text.
 */
export default function Hero() {
  const { lang } = useContext(LangContext);
  // Texts in both languages
  const heading = lang === 'no' ? (
    <>
      Hei, jeg er{' '}
      <span className="highlight">Nikolai&nbsp;Holmen&nbsp;Dyb</span>
    </>
  ) : (
    <>
      Hi, I’m{' '}
      <span className="highlight">Nikolai&nbsp;Holmen&nbsp;Dyb</span>
    </>
  );
  const subheading = lang === 'no'
    ? 'Systemutvikler og sikkerhetsspesialist som kombinerer teknologi med sikkerhet for å skape trygge løsninger.'
    : 'Software engineer and security specialist combining technology with security to build safe solutions.';
  const ctaText = lang === 'no' ? 'Utforsk mer' : 'Learn more';
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <a href="#about" className="cta">
          {ctaText}
        </a>
      </div>
    </section>
  );
}