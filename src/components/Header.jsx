import React from "react"
import { Image } from "react-bootstrap"
import MenuDrop from "./MenuDrop";
import Lucas from "../img/Portrait.webp"

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-dark fixed-top p-0' id="header">
        <div className='container-fluid'>
          <a className='navbar-brand' alt="Accueil" href='#home'>&nbsp;
            <Image
              id="photoHeader"
              src={Lucas}
              height={60}
              weight={60}
              placeholder="blurred"
              alt='Lengrand Lucas Logo'/>
          </a>
          <MenuDrop />
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarNavAltMarkup'>
            <div className='navbar-nav col justify-content-around text-center'>
            <a
                className='nav-link underline__headerLinks nav__text--color '
                href='#home'>
                <span
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-expanded='true'
                  role='link'>
                  Accueil
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