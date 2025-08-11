import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { LangProvider } from '../context/LangContext';

/**
 * Custom App component that wraps every page with language and theme providers.
 */
function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LangProvider>
  );
}

export default MyApp;