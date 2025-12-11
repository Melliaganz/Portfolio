import Lucas from "../img/Portrait.webp";
import React, { lazy, Suspense } from "react";

// NOUVEAU: Déclarez MenuDrop comme lazy
const LazyMenuDrop = lazy(() => import("./MenuDrop"));
const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top p-0"
        id="header"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            alt="Accueil"
            href="#home"
            title="Accueil"
          >
            &nbsp;
            <img
              id="photoHeader"
              src={Lucas}
              height={60}
              width={60}
              alt="Lengrand Lucas Logo"
            />
          </a>
          <Suspense fallback={null}>
            <LazyMenuDrop />
          </Suspense>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav col justify-content-around text-center">
              <a
                className="nav-link underline__headerLinks nav__text--color "
                href="#home"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-expanded="true"
                  role="link"
                  title="Accueil"
                >
                  Accueil
                </span>
              </a>
              <a
                className="nav-link underline__headerLinks nav__text--color "
                href="#portfolio"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-expanded="false"
                  role="link"
                  title="Portfolio"
                >
                  Portfolio
                </span>
              </a>
              <a
                className="nav-link underline__headerLinks nav__text--color "
                href="#formations"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-expanded="false"
                  role="link"
                  title=" Formations"
                >
                  Formations
                </span>
              </a>
              <a
                className="nav-link underline__headerLinks nav__text--color "
                href="#contact"
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-expanded="false"
                  role="link"
                  title="Contact"
                >
                  Contact
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
