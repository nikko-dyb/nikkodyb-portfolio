import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

/**
 * Contact section provides a short invitation to get in touch and links to
 * social profiles.  External links have rel="noopener noreferrer" for
 * security and open in new tabs.  An email link is provided via
 * mailto: scheme.
 */
export default function Contact() {
  const { lang } = useContext(LangContext);
  const intro = lang === 'no'
    ? 'Ønsker du å komme i kontakt eller diskutere et prosjekt? Send gjerne en e‑post eller ta kontakt via sosiale medier.'
    : 'Want to get in touch or discuss a project? Feel free to send me an email or reach out on social media.';
  return (
    <section id="contact" className="contact section">
      <h2>{lang === 'no' ? 'Kontakt' : 'Contact'}</h2>
      <p>{intro}</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ndyb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/nikko-dyb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/nikkodyb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/Nikolaidyb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a href="https://x.com/NikkoDyb" target="_blank" rel="noopener noreferrer" aria-label="X or Twitter">
          <i className="fab fa-x-twitter" aria-hidden="true"></i>
        </a>
        <a href="mailto:nikkodyb@googlemail.com" aria-label="Email">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}