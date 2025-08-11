import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

/**
 * Projects section showcases a few sample projects.  Each project is
 * displayed in a card with a title, short description and a link to
 * learn more.  For a real portfolio you can replace the sample data
 * with your actual projects and GitHub links.
 */
export default function Projects() {
  const { lang } = useContext(LangContext);
  const projects = [
    {
      titleNo: 'Portefølje nettside',
      titleEn: 'Portfolio website',
      descNo: 'Personlig portefølje bygget med Next.js, Tailwind CSS og i18n for flerspråklighet.',
      descEn: 'Personal portfolio built with Next.js, Tailwind CSS and i18n for multilingual support.',
      link: 'https://github.com/nikko-dyb'
    },
    {
      titleNo: 'Digitalt etterforskningsverktøy',
      titleEn: 'Digital forensics toolkit',
      descNo: 'Proof‑of‑concept for analyse av digitale bevis og automatisert rapportering.',
      descEn: 'Proof‑of‑concept for analysing digital evidence and generating reports.',
      link: '#'
    },
    {
      titleNo: 'GIS-tjeneste',
      titleEn: 'GIS service',
      descNo: 'Modul for geografisk informasjon i offentlige tjenester utviklet i Java.',
      descEn: 'Module for geographic information in public services developed in Java.',
      link: '#'
    }
  ];
  return (
    <section id="projects" className="section">
      <h2>{lang === 'no' ? 'Prosjekter' : 'Projects'}</h2>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3>{lang === 'no' ? project.titleNo : project.titleEn}</h3>
              <p>{lang === 'no' ? project.descNo : project.descEn}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                {lang === 'no' ? 'Se prosjekt' : 'View project'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}