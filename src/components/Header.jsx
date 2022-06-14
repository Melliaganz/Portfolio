import React from "react"
import { Image } from "react-bootstrap"
// import navLogo from "../images/navLogo.svg"
const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light border-top border-bottom bg-light fixed-top p-0'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#home'>
            <Image
              src="../img/OC.webp"
              height={60}
              weight={60}
              placeholder="blurred"
              alt='Lengrand Lucas Logo'/>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarNavAltMarkup'>
            <div className='navbar-nav col justify-content-around text-center'>
              <a
                className='nav-link underline__headerLinks nav__text--color'
                href='#competences'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='false'
                  role='link'>
                  Compétences
                </span>
              </a>
              <a
                className='nav-link underline__headerLinks nav__text--color '
                href='#formations'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='false'
                  role='link'>
                  Formations
                </span>
              </a>
              <a
                className='nav-link underline__headerLinks nav__text--color '
                href='#expPro'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='false'
                  role='link'>
                  Experience pro
                </span>
              </a>
              <a
                className='nav-link underline__headerLinks nav__text--color '
                href='#portfolio'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='false'
                  role='link'>
                  Portfolio
                </span>
              </a>
              <a
                className='nav-link underline__headerLinks nav__text--color '
                href='#contact'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='false'
                  role='link'>
                  Contact
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header