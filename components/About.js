import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

/**
 * About section displays a brief biography and profile photo.  It uses a
 * <picture> element with WebP and JPEG fallbacks for the profile image
 * and renders text in Norwegian and English depending on the current
 * language from LangContext.
 */
export default function About() {
  const { lang } = useContext(LangContext);
  // Biography paragraphs in each language
  const bioNo = `Hei! Jeg er en erfaren systemutvikler og sikkerhetsspesialist som brenner for å kombinere teknologi og sikkerhet for å levere trygge løsninger. \n\nI dag jobber jeg som spesialetterforsker i Agder politidistrikt hvor jeg leder digital etterforskning og samarbeider tett med utviklere for å identifisere sikkerhetshull. Før dette utviklet jeg moderne webapplikasjoner som Scrum‑leder og Security Champion i Sikri, og tidligere har jeg jobbet som kunderådgiver i Telenor.\n\nMed en bachelorgrad i IT og informasjonssystemer trives jeg med å lære nye ting og jobbe med mennesker.`;
  const bioEn = `Hi! I’m an experienced software engineer and security specialist who loves combining technology and security to deliver safe solutions.\n\nCurrently I work as a special investigator at the Agder police district, leading digital forensic investigations and collaborating closely with developers to identify security gaps. Before that I developed modern web applications as a Scrum leader and Security Champion at Sikri, and earlier I worked as a customer advisor at Telenor.\n\nWith a bachelor’s degree in IT and information systems I enjoy learning new things and working with people.`;
  return (
    <section id="about" className="about section">
      <h2>{lang === 'no' ? 'Om meg' : 'About me'}</h2>
      <div className="profile-container">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            <img
              src="/profile.jpg"
              alt="Nikolai Holmen Dyb"
              className="profile-photo"
              loading="lazy"
              decoding="async"
              width="150"
              height="150"
            />
          </picture>
      </div>
      <p className="lang-no" style={{ whiteSpace: 'pre-line' }}>{bioNo}</p>
      <p className="lang-en" style={{ whiteSpace: 'pre-line' }}>{bioEn}</p>
    </section>
  );
}