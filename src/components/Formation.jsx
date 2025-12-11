import React from "react";
import OC from "../img/OC.webp";
import { AccordionItem } from "../helper/AccordionItem";
import { FormationDetails } from "../helper/FormationDetails";
import saeLog from "../img/SAE_Institute_Logo.webp"
import btmmLogo from "../img/btmmlogo.webp"
import cfpLogo from "../img/renommercfpgranfjord.webp"

const formations = [
  {
    logo: cfpLogo,
    title: "Centre de formation professionnelle du Grand-Fjord",
    subtitle: "Etudiant, Protection et exploitation des territoires fauniques",
    date: "Septembre 2021, La Baie, Saguenay, QC, Canada",
    website: "http://www.cfpsaguenay.qc.ca/",
    details: [
      "Situation au regard du métier et de la démarche de formation",
      "Application des régles de santé et sécurité au travail",
      "Utilisation du matériel, de l'outillage et de l'équipement",
      "Assistance aux personnes en difficulté",
      "Utilisation du gaz propane",
      "Préparation des équipements, des bâtiments et des infrastuctures",
      "Application des notions de biologie animale",
      "Identification des espèces fauniques",
      "Interprétation des lois et règlements relatifs à la conservation de la faune",
      "Utilisation d'arme de chasse",
      "Communication en milieu de travail",
      "Gestion d'un poste d'accueil - Service à la clientèle",
      "Survie en forêt",
      "Orientation en forêt",
      "Déplacement non motorisé en forêt - Été (manuel et brevet)",
      "Déplacement non motorisé en forêt - Hiver",
      "Patrouille du territoire",
      "Enquête",
      "Notion d'écologie forestière",
      "Assistance aux spécialistes en aménagement faunique",
      "Pathologie animale",
      "Techniques de pêche",
      "Techniques de chasse et piégeage",
      "Accompagnement des usagers",
      "Recherche d'emploi",
      "Stage d'intégration",
    ],
  },
  {
    logo: saeLog,
    title: "SAE Institute",
    subtitle: "Licence, Technicien son",
    date: "Juillet 2017, Aubervilliers",
    website: "https://www.sae.edu/fra/",
    details: [
      "Gérer la prise de son lors d'un enregistrement sonore",
      "Editer un son",
      "Mixer un son",
      "Organiser les moyens techniques d'une prestation sonore(spectacle, tournage, broadcast [TV, radio, réseaux sociaux])",
    ],
  },
  {
    logo: btmmLogo,
    title: "Brevet de Technicien des métiers de la musique",
    subtitle: "Brevet de technicien",
    date: "Juillet 2015, Sèvres",
    website: "https://btmmsevres.wixsite.com/btmmsevres",
    details: [
      "Théorie Musicale",
      "Solfège",
      "Transposition d'instruments",
      "Utilisation de ProTools",
      "Utilisation de logiciel bureautique (Word, Excel, PowerPoint)",
    ],
  },
];

// Composant principal Formation
export default function Formation() {
  return (
    <div className="g-0 anchor" id="formationsBlock">
      <a href="/#formations" id="formations" aria-label="formation">
        &nbsp;
      </a>
      <section className="formations__background--color row g-0">
        <div className="p-5 m-0">
          <h3 className="h1 text-center formations__title--color my-5 text-uppercase">
            <span className="title">Formations</span>
          </h3>
          <div className="row g-0 mb-0">
          <section className="col-lg-2 text-center mx-auto me-lg-0 my-auto">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                            <img type="image/webp"alt='PhotoOpenClassNameroom' src={OC} width={50} height={50} />
                        </div>
                        <h3 className="h4 formation__title">
                            <a href="https://openclassrooms.com/fr/paths/556-developpeur-web" alt="OpenClassroom" target="_blank" rel="noopener noreferrer" title="Site d'OpenClassrooms">
                            Open
                            <wbr />
                            Classrooms
                            </a>
                        </h3>
                        <h4 className="h6 formation__title">Developpeur Web</h4>
                        <p className="formation__title">Mai 2022, Paris</p>
                    </section>
                    <div className="col-8 formation__title my-auto me-lg-0 mx-auto">
                        <ul>
                            <li>Formation d'une durée de 6 mois.</li>
                            <li>Construction de 7 projets professionalisants.</li>
                            <li>Technologies utilisées: HTML, CSS, Bootstrap, Sass, Javascript, Node.js, Express, MongoDB, MySQL, React.js, Wamp, Sass, Bootstrap, Sequelize. </li>
                            <li>Intégration de maquettes</li>
                            <li>Utilisation de Git et de GitHub</li>
                            <li>Optimisation de site et référencement</li>
                            <li>Sécurisation d'application avec les techniques de l'OWASP</li>
                            <li>Conception d'API REST</li>
                        </ul>
                        <figure className='mx-3 my-5'>
                        <blockquote className="blockquote">
                            "Bravo pour votre excellent travail tout au long du parcours. Votre ténacité a porté ses fruits et vous avez obtenu ce diplôme haut la main ! Nous vous souhaitons une très bonne continuation dans votre nouvelle carrière."
                        </blockquote>
                    </figure>
                    <figcaption className="blockquote-footer text-light">
                        <cite title="Source Title">Commentaires du jury </cite>
                    </figcaption>
                    </div>
            {formations.map((formation, index) => (
              <AccordionItem key={index} logo={formation.logo} title={formation.title}>
                <FormationDetails
                  logo={formation.logo}
                  title={formation.title}
                  subtitle={formation.subtitle}
                  date={formation.date}
                  details={formation.details}
                  website={formation.website}
                />
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
