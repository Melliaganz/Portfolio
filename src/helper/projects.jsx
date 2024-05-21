import React from "react";

// Import des images
import imageOptique from "../img/optique.webp";
import imageKanap from "../img/kanap.png";
import imageGroupomania from "../img/Groupomania.png";
import imagePiquante from "../img/piquante.png";
import imageOhMyFood from "../img/ohmyfood.png";
import imageNetflix from "../img/Netflix.png";
import imageImpots from "../img/impots.webp";

// Import des logos
import logoCss3 from "../img/css3.png";
import logoSass from "../img/Sass_Logo_Color.svg";
import logoJavascript from "../img/Unofficial_JavaScript_logo_2.svg";
import logoBootstrap from "../img/Bootstrap_logo.svg";
import logoNodejs from "../img/Node.js_logo.svg";
import logoExpress from "../img/Expressjs.png";
import logoMongoose from "../img/mongoose.webp";
import logoReact from "../img/React Logo.svg";
import logoMySQL from "../img/MySQL.svg";
import logoSequelize from "../img/sequelize-logo-9A5075DB9F-seeklogo.com.png";
import logoFirebase from "../img/Firebase.png";
import logoPlaystore from "../img/logoPlaystore.png";
import logoAppstore from "../img/appStore.png";
import logoKotlin from "../img/Kotlin_Icon.png";
import logoReactNative from "../img/react-native-1.svg";
import logoAndroidStudio from "../img/Android_Studio_Logo_(2023).svg.png";
import logoXcode from "../img/1200x630bb.png";

// Définition des icônes
const icons = {
  HTML5: { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png", alt: "HTML5", height: "48", title: 'HTML 5' },
  Firebase: { icon: logoFirebase, alt: "Firebase", height: "48", title: 'Firebase' },
  CSS3: { icon: logoCss3, alt: "CSS3", height: "48", title: 'CSS 3' },
  Sass: { icon: logoSass, alt: "Sass", height: "48", title: 'SASS' },
  Javascript: { icon: logoJavascript, alt: "Javascript", height: "48", title: 'JavaScript' },
  Bootstrap: { icon: logoBootstrap, alt: "Bootstrap", height: "48", title: 'Bootstrap' },
  NodeJs: { icon: logoNodejs, alt: "Node.js", height: "48", title: 'Node.js' },
  Express: { icon: logoExpress, alt: "Express", height: "48", title: 'Express' },
  MongoDb: { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/320px-MongoDB_Logo.svg.png", alt: "MongoDB", height: "48", title: 'MongoDB' },
  Mongoose: { icon: logoMongoose, alt: "Mongoose", height: "48", title: 'Mongoose' },
  React: { icon: logoReact, alt: "React.js", height: "48", title: 'React.js' },
  ReactNative: { icon: logoReactNative, alt: "React Native", width: '48', height: "48", title: 'React Native' },
  MySql: { icon: logoMySQL, alt: "MySQL", height: "48", title: 'MySQL' },
  Sequelize: { icon: logoSequelize, alt: "Sequelize", height: "48", title: 'Sequelize' },
  Gradle: { icon: "https://dwglogo.com/wp-content/uploads/2017/12/Gradle_logo_01.png", alt: "Gradle", height: "48", title: 'Gradle' },
  Playstore: { icon: logoPlaystore, alt: "Playstore", height: "48", title: 'Playstore' },
  Appstore: { icon: logoAppstore, alt: "Appstore", height: "48", title: 'Appstore' },
  Kotlin: { icon: logoKotlin, alt: "Kotlin", height: "48", title: 'Kotlin' },
  AndroidStudio: { icon: logoAndroidStudio, alt: "Android Studio", height: '48', title: "Android Studio" },
  Xcode: { icon: logoXcode, alt: "Xcode", height: '48', title: "Xcode" }
};

// Fonction pour créer un projet
const createProject = (title, year, details, stackIcons, linkGithub, linkDemo, imageSRC) => ({
  title,
  year,
  details,
  stackIcons,
  linkGithub,
  linkDemo,
  imageSRC
});

// Définition des projets
const projects = {
  Impots: createProject(
    <a href="https://www.impots.gouv.fr/accueil">Impots.gouv.fr</a>,
    "2023-2026",
    (
      <div className="col formation__title my-auto me-lg-2 mx-auto">
        <h3 className="text-uppercase">Développeur / Analyste</h3>
        <p>Le portefeuille applicatif de la division « Bouquet de services » est constitué de plusieurs services numériques stratégiques offerts aux usagers :</p>
        <ul>
          <li>Portail « impots.gouv.fr »</li>
          <li>Espace personnel privatif des particuliers (ENSU Présentation)</li>
          <li>Service en ligne de prise de rendez-vous (APRDV)</li>
          <li>Application « impots.gouv » pour smartphone</li>
          <li>Offre de paiement accessible aux usagers (Tipi, Payfip, Satelit, Pasifae)</li>
        </ul>
        <p>Les travaux effectués quand j'ai occupé ce poste sont :</p>
        <ul>
          <li>Étude des spécifications de la MOA</li>
          <li>Conception générale et détaillée</li>
          <li>Développements des différents CUs</li>
          <li>Tests unitaires</li>
          <li>Mise en commun des codes sous Subversion</li>
          <li>Confection de l’APK et livraison à la MOA pour recette</li>
          <li>Correction des bugs</li>
          <li>Dépôt de l’APK sur les stores Apple et Android</li>
          <li>Résolution des incidents de production</li>
        </ul>
      </div>
    ),
    [icons.Appstore, icons.Playstore, icons.Firebase, icons.ReactNative, icons.Gradle, icons.Kotlin, icons.AndroidStudio, icons.Xcode],
    null,
    "https://play.google.com/store/apps/details?id=fr.gouv.finances.smartphone.android&hl=fr&gl=US&pli=1",
    imageImpots
  ),
  Optique: createProject(
    <a href="https://www.optiquechatenay.fr/" alt="Optique Chatenay">Optique Chatenay</a>,
    "2023",
    (
      <div className="col formation__title my-auto me-lg-2 mx-auto">
        <h3 className="text-uppercase">Développeur full-stack</h3>
        <p style={{ textIndent: '10%' }}>
          Création d'un site vitrine pour la boutique Optique Chatenay. Ce site a été entièrement développé en React, une bibliothèque JavaScript de renom pour la création d'interfaces utilisateur interactives et réactives. J'ai travaillé en étroite collaboration avec HecateStudio pour le design du site, en veillant à ce que celui-ci reflète parfaitement l'image de la boutique d'optique. J'ai utilisé Firebase pour le stockage et l'utilisation d'image, ce qui permet au propriétaire de la boutique de mettre à jour facilement la galerie de photos. Ce projet a été un réel défi pour moi, car j'ai dû travailler en étroite collaboration avec le client et <a href="https://www.malt.fr/profile/valentinebarbier1?q=valentine+barbier&searchid=644fd39b22036a32323a6d6d" alt="malt.fr/profile/valentinebarbier">HecateStudio</a> pour comprendre leurs besoins et m'assurer que le site reflétait parfaitement l'image de la boutique. J'ai également dû être très attentif aux détails pour créer un site esthétique, ergonomique et facile à utiliser pour les visiteurs. Je suis très satisfait du résultat final et je suis convaincu que ce site apportera une grande valeur ajoutée à la boutique en permettant aux visiteurs de découvrir facilement ses produits et services.
        </p>
      </div>
    ),
    [icons.Firebase, icons.React],
    "https://github.com/Melliaganz/optiquechatenayfinal",
    "https://www.optiquechatenay.fr/",
    imageOptique
  ),
  // Autres projets définis de manière similaire...
};

export default projects;
