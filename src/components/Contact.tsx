import { FormEvent, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GitHubIcon from "@mui/icons-material/GitHub";
import DraftsIcon from "@mui/icons-material/Drafts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const formSparkUrl = `https://submit-form.com/zDkyCJXc`;

  const [submitting, setSubmitting] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      console.log("reCAPTCHA n'est pas encore chargé !");
      return;
    }

    setSubmitting(true);

    const token = await executeRecaptcha("contactFormSubmit");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("g-recaptcha-response", token);

    try {
      const response = await fetch(formSparkUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message envoyé !");
        form.reset();
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      alert("Erreur réseau ou interne lors de l'envoi.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="g-0 anchor">
      <a href="/#contact" id="contact" aria-label="contact">
        &nbsp;
      </a>
      <section className="contact__image">
        <div className="contact__content">
          <h3 className="h1 contact__title--color text-center text-uppercase p-5">
            <span className="title"> Contact</span>
          </h3>
          <div className="d-flex flex-wrap-reverse justify-content-evenly">
            <div className=" row g-0 mb-5 shadow border " id="lienContact">
              <div className="m-0 g-0 p-0">
                <div className="row p-3 align-items-center">
                  <div className="text-center contact--color">
                    <EmailIcon />
                    <a
                      className="nav-link underline__headerLinks nav__text--color   contact--color contact__content__text p-0 "
                      href="mailto:lucaslengranddev@gmail.com"
                      alt="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Email"
                    >
                      lucaslengranddev@gmail.com
                    </a>
                  </div>
                </div>
                <div className="row p-3 align-items-center">
                  <div className="contact__icon text-center contact--color">
                    <TwitterIcon />
                    <a
                      className="nav-link underline__headerLinks nav__text--color  contact--color p-0 contact__content__text "
                      href="https://twitter.com/LucasLengrand2"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      lucaslengrand2
                    </a>
                  </div>
                </div>
                <div className="row p-3 align-items-center">
                  <div className="contact__icon text-center contact--color">
                    <EventAvailableIcon />
                    <span className="nav-link underline__headerLinks nav__text--color contact--color p-0 contact__content__text ">
                      <time dateTime="1996-08-24" title="Date de naissance">
                        24/08/1996
                      </time>
                    </span>
                  </div>
                </div>
                <div className="row p-3 align-items-center">
                  <div className="contact__icon text-center contact--color">
                    <GitHubIcon />
                    <a
                      className="nav-link underline__headerLinks nav__text--color contact--color contact__content__text p-0 "
                      href="https://github.com/Melliaganz"
                      target="_blank"
                      rel="noreferrer"
                      title="Github"
                    >
                      {" "}
                      Melliaganz{" "}
                    </a>
                  </div>
                </div>
                <div className="row p-3 align-items-center">
                  <div className="contact__icon text-center contact--color">
                    <LinkedInIcon />
                    <a
                      className="nav-link underline__headerLinks nav__text--color contact--color  contact__content__text p-0"
                      href="http://www.linkedin.com/in/LucasLengrand"
                      title="Linkedin"
                    >
                      Lucas Lengrand
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" border shadow
           mb-5"
              id="cardFormulaire"
            >
              <div className=" card-header">
                Contactez moi ! <SendIcon />
              </div>
              <div className="card-body">
                <form
                  action={formSparkUrl}
                  onSubmit={submitForm}
                  data-netlify-recaptcha="true"
                  data-netlify="true"
                  className="row justify-content-center align-items-start"
                  id="formulaire"
                >
                  <div className="row">
                    <div className="col">
                      <label htmlFor="name" className="form-label ">
                        Nom et Prénom :{" "}
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Exemple: Marc Dupont"
                          className="shadow form-control"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="email" className="form-label">
                        Email :
                      </label>
                      <div className="col">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Exemple: MarcDupont@gmail.com"
                          className="shadow form-control"
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col p-2 mt-4" id="messageForm">
                    <label htmlFor="message" className="form-label ms-3">
                      Message :
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Votre message ici !"
                      required={true}
                      rows={3}
                      className="form-control shadow"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    name="_redirect"
                    value="https://www.lengrandlucas.com/#contact"
                  />
                  <p className="mt-2 text-center normal">
                    Protégé par reCAPTCHA.{" "}
                    <a
                      href="https://www.google.com/intl/fr/policies/privacy/"
                      alt="lien confidentialité"
                    >
                      Confidentialité
                    </a>{" "}
                    et{" "}
                    <a
                      href="https://www.google.com/intl/fr/policies/terms/"
                      alt="lien police"
                    >
                      Conditions
                    </a>
                    .
                  </p>
                  <button
                    disabled={submitting}
                    type="submit"
                    className="btn btn-light text-dark col-4 mt-2 shadow"
                  >
                    {submitting ? "Envoi !" : "Envoyer !"}{" "}
                    <span className="EmailIcon">
                      <EmailIcon />
                    </span>{" "}
                    <span className="DraftsIcon">
                      <DraftsIcon />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
