import { lazy, Suspense, useState, useMemo, useEffect, useRef } from "react";
import "./App.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { CssBaseline, ScopedCssBaseline, useMediaQuery ,createTheme,ThemeProvider} from "@mui/material";
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

function SectionObserver({ component: LazyComponent, minHeight = 500 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { rootMargin: "0px 0px 500px 0px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {" "}
      {isVisible ? (
        <LazyComponent />
      ) : (
        <div style={{ minHeight: `${minHeight}px` }} aria-hidden="true" />
      )}{" "}
    </div>
  );
}
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
          </Suspense>

          <Suspense fallback={<LazyLoadingFallback />}>
            <SectionObserver component={BotDiscord} />
            <SectionObserver component={Formation} />

            <SectionObserver
              component={() => (
                <GoogleReCaptchaProvider
                  reCaptchaKey={RECAPTCHA_SITE_KEY}
                  useRecaptchaNet={true}
                >
                  <Contact />
                </GoogleReCaptchaProvider>
              )}
            />

            <SectionObserver component={Footer} minHeight={100} />
          </Suspense>
        </ScopedCssBaseline>
      </ThemeProvider>
    </main>
  );
}

export default App;
