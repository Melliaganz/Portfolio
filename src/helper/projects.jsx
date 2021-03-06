import React from "react"
import imageKanap from "../img/kanap.png"
import imageGroupomania from "../img/Groupomania.png"
import imagePiquante from "../img/piquante.png"
import imageOhMyFood from "../img/ohmyfood.png"
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

const iconHTML5 = {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
    alt: "HTML5",
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
    groupomania: {
      title: `Cr??ez un r??seau social d???entreprise`,
      details: (
        <div className='col formation__title my-auto me-lg-2 mx-auto'>
          <h3 className='text-uppercase'>scenario</h3>
          <p>
          Vous ??tes d??veloppeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employ??s.
          Votre directrice, St??phanie, vient de signer un nouveau contrat avec Groupomania, 
          un groupe sp??cialis?? dans la grande distribution, et l'un des plus fid??les clients de l'agence.
          Le projet consiste ?? construire un r??seau social interne pour les employ??s de Groupomania. 
          Le but de cet outil est de faciliter les interactions entre coll??gues. Le d??partement RH de Groupomania a 
          imagin?? plusieurs fonctionnalit??s pour favoriser les ??changes entre coll??gues.
          </p>
          <h4 className="text-uppercase">comp??tences ??valu??es</h4>
          <ul>
            <li>Authentifier un utilisateur et maintenir sa session</li>
            <li>Impl??menter un stockage de donn??es s??curis?? en utilisant une base de donn??es</li>
            <li>D??velopper l???interface d???un site web gr??ce ?? un framework front-end</li>
          </ul>
        </div>
      ),
      stackIcons: [iconNodeJs, iconExpress, iconReact, iconMySql, iconSequelize, iconBootstrap],
      linkGithub: "https://github.com/Melliaganz/Groupomania",
      linkDemo: "https://groupomania-eta.vercel.app/login",
      imageSRC: imageGroupomania,
    },
    piquante: {
        title: "Construire une API s??curis??e",
        details: (
            <div className='col formation__title my-auto me-lg-2 mx-auto'>
                <h3 className='text-uppercase'>sc??nario</h3>
                <p>
                Vous avez pass?? la derni??re ann??e en tant que d??veloppeur back-end ind??pendant et vous avez travaill?? sur plusieurs projets de tailles et de difficult??s vari??es.
                La semaine derni??re, vous avez re??u un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie gr??ce ?? la s??rie YouTube ?? Hot Ones ?? . 
                C???est pourquoi ce nouveau client, la marque de condiments ?? base de piment Piiquante, veut d??velopper une application web de critique des sauces piquantes appel??e ?? Hot Takes ?? .
                Si la responsable produit de Piiquante souhaite ?? terme transformer l'application d'??valuation en une boutique en ligne, elle souhaite que la premi??re version soit une ?? galerie de sauces ?? permettant aux utilisateurs de t??l??charger leurs sauces piquantes pr??f??r??es 
                et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a ??t?? d??velopp?? ?? l'aide d'Angular et a ??t?? pr??compil?? apr??s des tests internes, mais Piiquante a besoin d'un d??veloppeur back-end pour construire l'API.
                </p>
                <h4 className="text-uppercase">comp??tences ??valu??es</h4>
                <ul>
                    <li>Impl??menter un mod??le logique de donn??es conform??ment ?? la r??glementation</li>
                    <li>Mettre en ??uvre des op??rations CRUD de mani??re s??curis??e</li>
                    <li>Stocker des donn??es de mani??re s??curis??e</li>
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
          <h3 className="text-uppercase">sc??nario</h3>
          <p>
          Vous ??tes en poste dans une agence de d??veloppement web depuis quelques semaines maintenant. 
          Apr??s avoir r??alis?? avec succ??s l???int??gration de quelques sites web (HTML/CSS), on vous confie une nouvelle mission.
          Votre client est Kanap, une marque de canap??s qui vend ses produits depuis sa boutique exclusivement. 
          Aujourd???hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique 
          pour vendre ses produits sur Internet.
          </p>
          <h4 className="text-uppercase">comp??tences ??valu??es</h4>
          <ul>
            <li>Valider des donn??es issues de sources externes</li>
            <li>G??rer des ??v??nements JavaScript</li>
            <li>Cr??er un plan de test pour une application</li>
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
          <h3 className="text-uppercase">sc??nario</h3>
          <p>
          Vous venez d?????tre recrut?? chez Ohmyfood!, en tant que d??veloppeur junior. F??licitations !
          Ohmyfood! est une jeune startup qui voudrait s'imposer sur le march?? de la restauration. 
          L'objectif est de d??velopper un site 100% mobile qui r??pertorie les menus de restaurants gastronomiques. 
          En plus des syst??mes classiques de r??servation, les clients pourront composer le menu de leur repas 
          pour que les plats soient pr??ts ?? leur arriv??e. Finis, les temps d'attente au restaurant !
          </p>
          <h4 className="text-uppercase">comp??tences ??valu??es</h4>
          <ul>
            <li>Mettre en place son environnement Front-End</li>
            <li>Mettre en place une structure de navigation pour un site web</li>
            <li>Utiliser un syst??me de gestion de versions pour le suivi du projet et son h??bergement</li>
            <li>Assurer la coh??rence graphique d'un site web</li>
            <li>Mettre en ??uvre des effets CSS graphiques avanc??s</li>
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