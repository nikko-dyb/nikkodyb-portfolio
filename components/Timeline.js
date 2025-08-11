import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

/**
 * Timeline component renders a vertical timeline of education and work
 * experience.  Each item contains a date range, title and a list of
 * bullet points.  Data for Norwegian and English is defined in an
 * array and selected based on the current language from LangContext.
 */
export default function Timeline() {
  const { lang } = useContext(LangContext);
  // Define timeline items with text for both languages
  const items = [
    {
      dateNo: '2025 – nå',
      dateEn: '2025 – now',
      titleNo: 'Spesialetterforsker – Agder politidistrikt',
      titleEn: 'Special Investigator – Agder Police District',
      bulletsNo: [
        'Ledende etterforskning innen digital kriminalitet og cybertrusler.',
        'Utarbeider analyser og rapporter som støtter pågående politiarbeid.',
        'Samarbeider tett med utviklere og etterforskere for å identifisere sikkerhetshull.'
      ],
      bulletsEn: [
        'Leading investigations into digital crime and cyber threats.',
        'Producing analyses and reports that support ongoing police work.',
        'Collaborating closely with developers and investigators to identify security gaps.'
      ]
    },
    {
      dateNo: '2019 – 2025',
      dateEn: '2019 – 2025',
      titleNo: 'Systemutvikler – Sikri',
      titleEn: 'System Developer – Sikri',
      bulletsNo: [
        'Utviklet moderne og brukervennlige webapplikasjoner for det offentlige.',
        'Ledet Scrum‑team og organiserte sprintplanlegging og retrospektiver.',
        'Implementerte omfattende testdekning og automatiserte byggeprosesser.',
        'Fungerte som Security Champion og gjennomførte sikkerhetsrevisjoner og opplæring.'
      ],
      bulletsEn: [
        'Developed modern, user‑friendly web applications for the public sector.',
        'Led a Scrum team and organised sprint planning and retrospectives.',
        'Implemented extensive test coverage and automated build processes.',
        'Served as Security Champion, conducting security reviews and training.'
      ]
    },
    {
      dateNo: '2018 – 2019',
      dateEn: '2018 – 2019',
      titleNo: 'Kunderådgiver – Telenor',
      titleEn: 'Customer Advisor – Telenor',
      bulletsNo: [
        'Ansvarlig for produktfeilretting, kundestøtte og mersalg.',
        'Løste feil effektivt og sørget for høy kundetilfredshet.',
        'Arbeidet tett med tekniske team for å forbedre produktkvaliteten.'
      ],
      bulletsEn: [
        'Responsible for product troubleshooting, customer support and upselling.',
        'Resolved issues efficiently and ensured high customer satisfaction.',
        'Worked closely with technical teams to improve product quality.'
      ]
    },
    {
      dateNo: '2016 – 2019',
      dateEn: '2016 – 2019',
      titleNo: 'Bachelor i IT og informasjonssystemer – Universitetet i Agder',
      titleEn: 'BSc in IT & Information Systems – University of Agder',
      bulletsNo: [
        'Fullførte bachelorgrad med fordypning i programmering, datastrukturer og algoritmer.',
        'Prosjekter i webutvikling og nettverk.',
        'Lærte grunnprinsipper for systemarkitektur og databaseadministrasjon.'
      ],
      bulletsEn: [
        'Completed bachelor’s degree specialising in programming, data structures and algorithms.',
        'Projects in web development and networking.',
        'Learned fundamental principles of system architecture and database administration.'
      ]
    }
  ];
  return (
    <section id="cv" className="cv section">
      <h2>{lang === 'no' ? 'CV' : 'Resume'}</h2>
      <div className="timeline">
        {items.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="date">{lang === 'no' ? item.dateNo : item.dateEn}</div>
            <div className="content">
              <h3>{lang === 'no' ? item.titleNo : item.titleEn}</h3>
              <ul>
                {(lang === 'no' ? item.bulletsNo : item.bulletsEn).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}