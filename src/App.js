import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import About from './components/About';
import Header from './components/Header'
import Contact from './components/Contact';
import Formation from './components/Formation';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollupButton from './components/ScrollupButton';
import Socials from './components/Socials';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <main className="main">
      <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ScopedCssBaseline enableColorScheme >
      {/*<div className='loader'>
        <img className="spinner" src={Lucas} alt="Lucas Lengrand" />
  </div>*/}
      <Header />
      <ScrollupButton />
      <Socials />
      <About />
      <Formation />
      <Portfolio />
      <Contact />
      <Footer />
      </ScopedCssBaseline>
      </ThemeProvider>
      </main>
  );
}

export default App;
