import React from "react";

// Import des images
import imageOptique from "../img/optique.webp";
import imageKanap from "../img/kanap.png";
import imageGroupomania from "../img/Groupomania.png";
import imagePiquante from "../img/piquante.png";
import imageNetflix from "../img/Netflix.png";
import imageImpots from "../img/impots.webp";

// Import des logos
import logoCss3 from "../img/css3.png";
import logoSass from "../img/Sass_Logo_Color.svg";
import logoJavascript from "../img/Unofficial_JavaScript_logo_2.svg";
import logoBootstrap from "../img/Bootstrap_logo.svg";
import logoNodejs from "../img/Node.js_logo.svg";
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
  Express: { icon: "https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png", alt: "Express", height: "48", title: 'Express' },
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
  Xcode: { icon: logoXcode, alt: "Xcode", height: '48', title: "Xcode" },
  Vercel: {icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt:"Vercel", height:'48', title:'Vercel'},
  Heroku: { icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/heroku_original_wordmark_logo_icon_146482.png", alt: 'Heroku', height: '48', title: 'Heroku'},
  Psql: { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png", alt: 'PostgresSql', height: '48', title: 'PostGresSql'}
};

// Fonction pour créer un projet
const createProject = (title, year, details, stackIcons, linkGithub, linkDemo,linkProjet, imageSRC) => ({
  title,
  year,
  details,
  stackIcons,
  linkGithub,
  linkDemo,
  linkProjet,
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
        <p>Développement de l'application mobile des impots</p>
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
    [icons.Firebase, icons.React, icons.Vercel],
    null,
    null,
    "https://www.optiquechatenay.fr/",
    imageOptique
  ),
  Netflix: createProject(
    <a href="https://netflix-clone-iota-vert.vercel.app/" alt="Clone Netflix">Clone Netflix</a>,
    "2023",
    (
      <div className="col formation__title my-auto me-lg-2 mx-auto">
        <h3 className="text-uppercase">PROJET PERSO</h3>
        <p style={{ textIndent: '10%' }}>
        Le projet de clone de Netflix en React et Firebase est une application Web qui permet aux utilisateurs de découvrir et de regarder des films et des émissions de télévision en ligne. En utilisant les technologies React et Firebase, cette application offre une interface utilisateur réactive et une base de données en temps réel pour stocker les données de l'utilisateur. L'application offre une expérience utilisateur intuitive pour la navigation des contenus, la recherche de films et d'émissions de télévision, et la lecture en continu. Elle permet également aux utilisateurs de créer un compte, de s'abonner à des services de streaming et de gérer leur profil et leurs préférences.
        </p>
      </div>
    ),
    [icons.Firebase, icons.React, icons.Vercel],
    "https://github.com/Melliaganz/netflix-clone",
    "https://netflix-clone-iota-vert.vercel.app/",
    null,
    imageNetflix
  ),
  GroupoMania: createProject(
    <a href="https://groupomania-eta.vercel.app/login" alt="Groupomania">Groupomania</a>,
    "2022",
    (
      <div className='col formation__title my-auto me-lg-2 mx-auto'>
          <h3 className='text-uppercase'>Projet de formation</h3>
          <p style={{textIndent: '10%'}}>
          Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés.
          Votre directrice, Stéphanie, vient de signer un nouveau contrat avec Groupomania, 
          un groupe spécialisé dans la grande distribution, et l'un des plus fidèles clients de l'agence.
          Le projet consiste à construire un réseau social interne pour les employés de Groupomania. 
          Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a 
          imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.
          </p>
          <h4 className="text-uppercase">compétences évaluées</h4>
          <ul>
            <li>Authentifier un utilisateur et maintenir sa session</li>
            <li>Implémenter un stockage de données sécurisé en utilisant une base de données</li>
            <li>Développer l’interface d’un site web grâce à un framework front-end</li>
          </ul>
        </div>
    ),
    [icons.NodeJs,icons.Express ,icons.React, icons.MySql, icons.Sequelize, icons.Bootstrap, icons.Vercel, icons.Heroku, icons.Psql],
    "https://github.com/Melliaganz/Groupomania",
    "https://groupomania-eta.vercel.app/login",
    null,
    imageGroupomania
  ),
  HotOnes: createProject(
    <a href="https://piquante-c0opxjtej-melliaganz.vercel.app/login" alt="HotOnes">Hot ones</a>,
    "2022",
    (
      <div className='col formation__title my-auto me-lg-2 mx-auto'>
                <h3 className='text-uppercase'>Projet de formation</h3>
                <p style={{textIndent: '10%'}}>
                Vous avez passé la dernière année en tant que développeur back-end indépendant et vous avez travaillé sur plusieurs projets de tailles et de difficultés variées.
                La semaine dernière, vous avez reçu un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . 
                C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .
                Si la responsable produit de Piiquante souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées 
                et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.
                </p>
                <h4 className="text-uppercase">compétences évaluées</h4>
                <ul>
                    <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                    <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                    <li>Stocker des données de manière sécurisée</li>
                </ul>
            </div>
    ),
    [icons.NodeJs,icons.Express ,icons.MongoDb, icons.Mongoose, icons.Vercel, icons.Heroku],
    "https://github.com/Melliaganz/Piquante",
    "https://piquante.vercel.app/login",
    null,
    imagePiquante
  ),
  Kanap: createProject(
    <a href="https://github.com/Melliaganz/Kanap" alt="Kanap">Kanap</a>,
    "2022",
    (
      <div className="col formation__title my-auto me-lg-2 mx-auto">
          <h3 className="text-uppercase">Projet de formation</h3>
          <p style={{textIndent: '10%'}}>
          Vous êtes en poste dans une agence de développement web depuis quelques semaines maintenant. 
          Après avoir réalisé avec succès l’intégration de quelques sites web (HTML/CSS), on vous confie une nouvelle mission.
          Votre client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. 
          Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique 
          pour vendre ses produits sur Internet.
          </p>
          <h4 className="text-uppercase">compétences évaluées</h4>
          <ul>
            <li>Valider des données issues de sources externes</li>
            <li>Gérer des événements JavaScript</li>
            <li>Créer un plan de test pour une application</li>
            <li>Interagir avec un web service avec JavaScript</li>
          </ul>
          </div>
    ),
    [icons.Javascript,icons.HTML5, icons.CSS3, icons.Vercel, icons.Heroku],
    "https://github.com/Melliaganz/Kanap",
    "https://kanap-lyart.vercel.app/",
    null,
    imageKanap
  ),
};

export default projects;
