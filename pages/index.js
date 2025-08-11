import Head from 'next/head';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { LangContext } from '../context/LangContext';

/**
 * Home page assembles all sections of the portfolio.  It sets up meta tags
 * for SEO and social sharing based on the current language.  A skip link
 * allows keyboard users to jump directly to the main content.  The
 * components imported above encapsulate each section of the page.
 */
export default function Home() {
  const { lang } = useContext(LangContext);
  const metaDescription =
    lang === 'no'
      ? 'Porteføljen til Nikolai Holmen Dyb – systemutvikler og sikkerhetsspesialist med erfaring innen digital etterforskning, webutvikling og IT-sikkerhet.'
      : 'Portfolio of Nikolai Holmen Dyb – software engineer and security specialist with experience in digital forensics, web development and IT security.';
  return (
    <>
      <Head>
        <title>{`Nikolai Holmen Dyb — ${lang === 'no' ? 'Portefølje' : 'Portfolio'}`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://nikkodyb.no/" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Nikolai Holmen Dyb — Portfolio" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikkodyb.no/" />
        <meta property="og:image" content="https://nikkodyb.no/hero-lg.webp" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nikolai Holmen Dyb — Portfolio" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://nikkodyb.no/hero-lg.webp" />
      </Head>
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link">
        {lang === 'no' ? 'Hopp til innhold' : 'Skip to content'}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nikolai Holmen Dyb</p>
      </footer>
    </>
  );
}