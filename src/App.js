import React, { lazy, Suspense, useState, useMemo, useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lucas from "./img/Portrait.webp";

const About = lazy(() => import('./components/About'));
const Header = lazy(() => import('./components/Header'));
const Contact = lazy(() => import('./components/Contact'));
const Formation = lazy(() => import('./components/Formation'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollupButton = lazy(() => import('./components/ScrollupButton'));
const Socials = lazy(() => import('./components/Socials'));

const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
};

const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(loadingTimeout);
  }, []);

  return { isLoading };
};

function App() {
  const theme = useTheme();
  const { isLoading } = useLoadingState();

  return (
    <main className="main">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ScopedCssBaseline enableColorScheme>
          {isLoading ? (
            <div className='loader'>
              <img className="spinner" src={Lucas} alt="Lucas Lengrand" />
            </div>
          ) : (
            <Suspense>
              <Header />
              <ScrollupButton />
              <Socials />
              <About />
              <Portfolio />
              <Formation />
              <Contact />
              <Footer />
            </Suspense>
          )}
        </ScopedCssBaseline>
      </ThemeProvider>
    </main>
  );
}

export default App;