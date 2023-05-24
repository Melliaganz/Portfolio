import React from "react"
import imageOptique from "../img/optique.webp"
import imageKanap from "../img/kanap.png"
import imageGroupomania from "../img/Groupomania.png"
import imagePiquante from "../img/piquante.png"
import imageOhMyFood from "../img/ohmyfood.png"
import imageNetflix from "../img/Netflix.png"
import logoCss3 from "../img/css3.png"
import logoSass from "../img/Sass_Logo_Color.svg"
import logoJavascript from "../img/Unofficial_JavaScript_logo_2.svg"
import logoBoostrap from "../img/Bootstrap_logo.svg"
import logoNodejs from "../img/Node.js_logo.svg"
import logoExpress from "../img/Expressjs.png"
import logoMongoose from "../img/mongoose.webp"
import logoReact from "../img/React Logo.svg"
import logoMySQL from "../img/MySQL.svg"
import logoSequelize from "../img/sequelize-logo-9A5075DB9F-seeklogo.com.png"
import logoFirebase from "../img/Firebase.png"

const iconHTML5 = {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
    alt: "HTML5",
    width: "48",
    height: "48",
  }
  const iconFirebase={
    icon:logoFirebase,
    alt:"Firebase",
    width: "48",
    height: "48",
  }
  const iconCSS3 = {
    icon: logoCss3,
    alt: "CSS3",
    width: "35",
    height: "48",
  }
  const iconSass = {
    icon: logoSass,
    alt: "Sass",
    width: "48",
    height: "48",
  }
  const iconJavascript = {
    icon: logoJavascript,
    alt: "Javascript",
    width: "48",
    height: "48",
  }
  const iconBootstrap = {
    icon: logoBoostrap,
    alt: "Bootstrap",
    width: "48",
    height: "48",
  }
  const iconNodeJs = {
    icon: logoNodejs,
    alt: "Node.js",
    width: "60",
    height: "48",
  }
  const iconExpress = {
    icon: logoExpress,
    alt: "Express",
    width: "155",
    height: "47",
  }
  const iconMongoDb = {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/320px-MongoDB_Logo.svg.png",
    alt: "MongoDB",
    width: "160",
    height: "43",
  }
  const iconMongoose = {
    icon: logoMongoose,
    alt: "Mongoose",
    width: "82.625",
    height: "40",
  }
  const iconReact = {
    icon: logoReact,
    alt: "React.js",
    width: "48",
    height: "48",
  }
  const iconMySql = {
    icon: logoMySQL,
    alt: "MySQL",
    width: "48",
    height: "48",
  }
  const iconSequelize = {
    icon: logoSequelize,
    alt: "Sequelize",
    width: "65",
    height: "75",
  }

  const projects = {
    Optique: {
      title: "Optique Chatenay",
      details: (
        <div className="col formation__title my-auto me-lg-2 mx-auto">
        <h3 className="text-uppercase">Projet Free-lance</h3>
        <p>
        Création d'un site vitrine pour la boutique Optique Chatenay. Ce site a été entièrement développé en React, une bibliothèque JavaScript de renom pour la création d'interfaces utilisateur interactives et réactives. J'ai travaillé en étroite collaboration avec HecateStudio pour le design du site, en veillant à ce que celui-ci reflète parfaitement l'image de la boutique d'optique.
        J'ai utilisé Firebase pour le stockage et l'utilisation d'image, ce qui permet au propriétaire de la boutique de mettre à jour facilement la galerie de photos.
        Ce projet a été un réel défi pour moi, car j'ai dû travailler en étroite collaboration avec le client et <a href="https://www.malt.fr/profile/valentinebarbier1?q=valentine+barbier&searchid=644fd39b22036a32323a6d6d" alt="malt.fr/profile/valentinebarbier">HecateStudio </a> pour comprendre leurs besoins et m'assurer que le site reflétait parfaitement l'image de la boutique. J'ai également dû être très attentif aux détails pour créer un site esthétique, ergonomique et facile à utiliser pour les visiteurs.
        Je suis très satisfait du résultat final et je suis convaincu que ce site apportera une grande valeur ajoutée à la boutique en permettant aux visiteurs de découvrir facilement ses produits et services.
        </p>
      </div>
      ),
      stackIcons: [iconFirebase, iconReact],
      linkGithub: "https://github.com/Melliaganz/optiquechatenayfinal",
      linkDemo: "https://optiquechatenay.vercel.app/",
      imagesSrc: imageOptique,

    },
    Netflix: {
      title: "Création d'un clone Netflix",
      details: (
        <div className="col formation__title my-auto me-lg-2 mx-auto">
        <h3 className="text-uppercase">Projet perso</h3>
        <p>
        Le projet de clone de Netflix en React et Firebase est une application Web qui permet aux utilisateurs de découvrir et de regarder des films et des émissions de télévision en ligne. En utilisant les technologies React et Firebase, 
        cette application offre une interface utilisateur réactive et une base de données en temps réel pour stocker les données de l'utilisateur.
        L'application offre une expérience utilisateur intuitive pour la navigation des contenus, la recherche de films et d'émissions de télévision, et la lecture en continu. 
        Elle permet également aux utilisateurs de créer un compte, de s'abonner à des services de streaming et de gérer leur profil et leurs préférences.
        </p>
      </div>
      ),
      stackIcons: [iconFirebase, iconReact],
      linkGithub: "https://github.com/Melliaganz/netflix-clone",
      linkDemo: "https://netflix-clone-iota-vert.vercel.app/",
      imagesSrc: imageNetflix,

    },
    groupomania: {
      title: `Créez un réseau social d’entreprise`,
      details: (
        <div className='col formation__title my-auto me-lg-2 mx-auto'>
          <h3 className='text-uppercase'>Projet de formation</h3>
          <p>
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
      stackIcons: [iconNodeJs, iconExpress, iconReact, iconMySql, iconSequelize, iconBootstrap],
      linkGithub: "https://github.com/Melliaganz/Groupomania",
      linkDemo: "https://groupomania-eta.vercel.app/login",
      imageSRC: imageGroupomania,
    },
    piquante: {
        title: "Construire une API sécurisée",
        details: (
            <div className='col formation__title my-auto me-lg-2 mx-auto'>
                <h3 className='text-uppercase'>Projet de formation</h3>
                <p>
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
        stackIcons: [iconNodeJs, iconExpress, iconMongoDb, iconMongoose],
        linkGithub: "https://github.com/Melliaganz/Piquante",
        linkDemo: "https://piquante-c0opxjtej-melliaganz.vercel.app/login",
        imageSRC: imagePiquante,
    },
    kanap: {
      title: "Construisez un site e-commerce en JavaScript",
      details: (
        <div className="col formation__title my-auto me-lg-2 mx-auto">
          <h3 className="text-uppercase">Projet de formation</h3>
          <p>
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
      stackIcons: [iconHTML5, iconCSS3, iconJavascript],
      linkGithub: "https://github.com/Melliaganz/Kanap",
      linkDemo: "https://github.com/Melliaganz/Kanap",
      imageSRC: imageKanap
    },
    omf: {
      title: "Dynamisez une page web avec des animations CSS",
      details: (
        <div className="col formation__title my-auto me-lg-2 mx-auto">
          <h3 className="text-uppercase">Projet de formation</h3>
          <p>
          Vous venez d’être recruté chez Ohmyfood!, en tant que développeur junior. Félicitations !
          Ohmyfood! est une jeune startup qui voudrait s'imposer sur le marché de la restauration. 
          L'objectif est de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques. 
          En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas 
          pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !
          </p>
          <h4 className="text-uppercase">compétences évaluées</h4>
          <ul>
            <li>Mettre en place son environnement Front-End</li>
            <li>Mettre en place une structure de navigation pour un site web</li>
            <li>Utiliser un système de gestion de versions pour le suivi du projet et son hébergement</li>
            <li>Assurer la cohérence graphique d'un site web</li>
            <li>Mettre en œuvre des effets CSS graphiques avancés</li>
          </ul>
        </div>
      ),
      stackIcons: [iconHTML5, iconCSS3, iconSass],
      linkGithub: "https://github.com/Melliaganz/Ohmyfood",
      linkDemo: "https://melliaganz.github.io/Ohmyfood/",
      imageSRC: imageOhMyFood
    }
  }
  export default projects