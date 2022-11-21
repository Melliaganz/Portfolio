import React, {FormEvent, useState} from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GitHubIcon from '@mui/icons-material/GitHub';
import DraftsIcon from '@mui/icons-material/Drafts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import ReCAPTCHA from 'react-google-recaptcha';


export default function Contact() {
  const formSparkUrl = `https://submit-form.com/zDkyCJXc`
  const recaptchaKey = '6Ld5u-cgAAAAALwGg6R0qaGOEPsIOhej7iW5NPHI';
  const [submitting, setSubmitting] = useState(false);
  const submitForm = async (event: FormEvent) => {
    setSubmitting(true);
  }
  return (
    <div className="g-0 anchor">
      <a href="/#contact" id="contact" aria-label='contact'>&nbsp;</a>
      <section className="contact__image">
        <div className="contact__content">
          <h3 className="contact__title--color text-center text-uppercase p-5">
            <span className="title"> Contact</span>
          </h3>
          <div className='d-flex flex-wrap-reverse justify-content-evenly'>
          <div className=" row g-0 mb-5 shadow border " id='lienContact'>
            <div className="m-0 g-0 p-0">
              <div className="row p-3 align-items-center">
              <div className="text-center contact--color">
                <div className="contact__icon col-12 text-center contact--color">
                  <PersonPinIcon />
                </div>
                <span className="p-0 col-9 contact--color "> 24 rue de Verville, 91680 Bruyères-le-Châtel</span>
              </div>
              </div>
              <div className="row p-3 align-items-center">
                <div className="text-center contact--color">
                  <EmailIcon />
                <a 
                className="nav-link underline__headerLinks nav__text--color   contact--color contact__content__text p-0 " 
                href="mailto:lucaslengranddev@gmail.com" target="_blank" rel="noopener noreferrer" title="Adresse Email">
                  lucaslengranddev@gmail.com
                </a>
              </div>
              </div>
              <div className="row p-3 align-items-center">
                <div className="contact__icon text-center contact--color">
                  <PhoneIcon />
                <a className="nav-link underline__headerLinks nav__text--color  contact--color p-0 contact__content__text " href="tel:+33667007416" title="Numéro de Téléphone">
                  +336 67 00 74 16
                </a> 
              </div>
              </div>
              <div className="row p-3 align-items-center">
                <div className="contact__icon text-center contact--color">
                  <EventAvailableIcon />
                <span className="nav-link underline__headerLinks nav__text--color contact--color p-0 contact__content__text ">
                  <time dateTime="1996-08-24">24/08/1996</time>
                </span>
              </div>
              </div>
              <div className="row p-3 align-items-center">
              <div className="contact__icon text-center contact--color">
                <GitHubIcon />
              <a className="nav-link underline__headerLinks nav__text--color contact--color contact__content__text p-0 " href="https://github.com/Melliaganz" target="_blank" rel="noreferrer" title="Profil Github"> Melliaganz </a>
              </div>
              </div>
              <div className="row p-3 align-items-center">
                <div className="contact__icon text-center contact--color">
                  <LinkedInIcon />
                <a className="nav-link underline__headerLinks nav__text--color contact--color  contact__content__text p-0" href="http://www.linkedin.com/in/LucasLengrand" title="Profil Linkedin" >Lucas Lengrand</a>
              </div>
              </div>
            </div>
          </div>
          <div className=' border shadow
           mb-5' id="cardFormulaire">
      <div className=" card-header">Contactez moi ! <SendIcon /></div>
        <div className='card-body'>
        <form 
        action={formSparkUrl} 
        onSubmit={submitForm} 
        data-netlify-recaptcha="true" 
        data-netlify="true" 
        className='row justify-content-center align-items-start' 
        id="formulaire"
        >
          <div className='row'>
            <div className='col'>
          <label htmlFor="name" className='form-label'>Nom et Prénom : </label>
          <div className='col'>
          <input type="text" id="name" name="name" placeholder="Example: Marc Dupont"  className='form-control' required={true} />
          </div>
          </div>
          <div className='col'>
          <label htmlFor="email" className='form-label' >Email :</label>
          <div className='col'>
          <input type="email" id="email" name="email" placeholder="Exemple: MarcDupont@gmail.com" className='form-control' required={true} />
          </div>
          </div>
          </div>
        <div className='col p-2 mt-4'>
          <label htmlFor="message" className='form-label ms-3'>Message :</label>
          <textarea
          id="message"
          name="message"
          placeholder="Votre message ici !"
          required={true}
          rows="3"
          className='form-control'
          ></textarea>
        </div>
        <input type="hidden" name="_redirect" value="https://portfolio-melliaganz.vercel.app/" />
          <ReCAPTCHA
          aria-label='reCAPTCHA'
          aria-hidden="true"
          className='d-flex align-items-center flex-column mb-3 mt-5'
          sitekey={recaptchaKey}/>
          <button disabled={submitting} type="submit" className="btn btn-light col-4 mt-2">
          {submitting ? "Envoi !" : "Envoyer !"} <span className='EmailIcon' ><EmailIcon /></span> <span className='DraftsIcon'><DraftsIcon /></span>
          </button>          
        </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}
