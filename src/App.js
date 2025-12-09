import { lazy, Suspense, useState, useMemo, useEffect } from "react";
import "./App.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import BotDiscord from "./components/BotDiscord";

const About = lazy(() => import("./components/About"));
const Header = lazy(() => import("./components/Header"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const Formation = lazy(() => import("./components/Formation"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollupButton = lazy(() => import("./components/ScrollupButton"));
const Socials = lazy(() => import("./components/Socials"));

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || "";
const LUCAS_STATIC_PATH = process.env.PUBLIC_URL + "/Portrait.webp";

const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
};

const useAssetLoader = (imagePath) => {
  const [isAssetLoaded, setIsAssetLoaded] = useState(false);

  useEffect(() => {
    if (!imagePath) {
      setIsAssetLoaded(true);
      return;
    }

    const img = new Image();

    img.onload = () => {
      setIsAssetLoaded(true);
    };

    img.onerror = () => {
      console.error("Critical asset failed to load:", imagePath);
      setIsAssetLoaded(true);
    };

    img.src = imagePath;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imagePath]);

  return { isAssetLoaded };
};

const FullPageLoader = () => (
  <div className="loader">
    <img
      className="spinner"
      src={LUCAS_STATIC_PATH}
      alt="Lucas Lengrand"
      fetchPriority="high"
    />
  </div>
);

const LazyLoadingFallback = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>Loading content...</div>
);

function App() {
  const theme = useTheme();
  const { isAssetLoaded } = useAssetLoader(LUCAS_STATIC_PATH);

  if (!isAssetLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ScopedCssBaseline enableColorScheme>
          <FullPageLoader />
        </ScopedCssBaseline>
      </ThemeProvider>
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      useRecaptchaNet={true}
    >
      <main className="main">
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <ScopedCssBaseline enableColorScheme>
            <Suspense fallback={<LazyLoadingFallback />}>
              <Header />
              <ScrollupButton />
              <Socials />
              <About />
              <Portfolio />
              <BotDiscord />
              <Formation />
              <Contact />
              <Footer />
            </Suspense>
          </ScopedCssBaseline>
        </ThemeProvider>
      </main>
    </GoogleReCaptchaProvider>
  );
}

export default App;
