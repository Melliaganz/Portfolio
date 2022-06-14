import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Contact() {
  return (
    <div class="g-0 anchor">
      <a href="/#contact" id="contact">&nbsp;</a>
      <section class="contact__image pb-1">
        <div class="contact__content">
          <h3 class="contact__title--color text-center text-uppercase p-5">
            <span class="underline__title"> Contact</span>
          </h3>
          <div class=" row g-0 mb-5">
            <adress class="m-0 g-0 p-0">
              <div class="row p-3 align-items-center">
              <div class=" col-2 text-center contact--color">
                <div class="contact__icon col-2 text-center contact--color">
                  <PersonPinIcon />
                </div>
                <span class="p-0 col-9 contact--color"> 24 rue de verville, 91680 Bruyères-le-Châtel</span>
              </div>
              </div>
              <div class="row p-3 align-items-center">
                <div class=" col-2 text-center contact--color">
                  <EmailIcon />
                </div>
                <a 
                class="nav-link underline__headerLinks nav_text--color contact--color contact__content__text p-0" 
                href="mailto:lucaslengranddev@gmail.com">
                  lucaslengranddev@gmail.com
                </a>
              </div>
              <div class="row p-3 align-items-center">
                <div class="contact__icon col-2 text-center contact--color">
                  <PhoneIcon />
                </div>
                <a class="nav-link underline__headerLinks nav__text--color contact--color p-0 contact__content__text" href="tel:+33667007416">
                  +336 67 00 74 16
                </a>
              </div>
              <div class="row p-3 align-items-center">
                <div class="contact__icon col-2 text-center contact--color">
                  <EventAvailableIcon />
                </div>
                <span class="p-0 col contact--color">
                  <time datetime="1996-08-24">24/08/1996</time>
                </span>
              </div>
              <div class="row p-3 align-items-center">
              <div class="contact__icon col-2 text-center contact--color">
                <GitHubIcon />
              </div>
              <a class="nav-link underline__headerLinks nav__text--color contact--color contact__content__text p-0" href="https://github.com/Melliaganz" target="_blank" rel="noreferrer"> Melliaganz </a>.
              </div>
              <div class="row p-3 align-items-center">
                <div class=" contact__icon col-2 text-center contact--color">
                  <LinkedInIcon />
                </div>
                <a class="nav-link underline__headerLinks nav__text--color contact--color contact__content__text p-0" href="http://www.linkedin.com/in/LucasLengrand">Lucas Lengrand</a>
              </div>
            </adress>
          </div>
        </div>
      </section>
    </div>
  )
}
