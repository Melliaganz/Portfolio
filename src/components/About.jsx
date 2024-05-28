import React from 'react';
import { Image } from 'react-bootstrap';
import resume from '../img/Lengrand Lucas.pdf';
import Portrait from '../img/Portrait.webp';
import ButtonHomeDownload from './ButtonHomeDownload';
import Texteffect from './Texteffect';

// Composant réutilisable pour afficher une icône de technologie
const TechIcon = ({ src, alt, title, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
    <img src={src} alt={alt} height={25} />
  </a>
);

// Données statiques pour les technologies
const technologies = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'ReactJs', href: 'https://reactjs.org/' },
  { src: 'https://devtop.io/wp-content/uploads/2022/10/react-native-1.png', alt: 'React Native', href: 'https://reactnative.dev/' },
  { src: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/230/thumb_bigger_formation-typescript.png', alt: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', alt: 'Javascript', href: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
  { src: 'https://www.svgrepo.com/show/331488/mongodb.svg', alt: 'MongoDB', href: 'https://www.mongodb.com/' },
  { src: 'https://cdn2.boryl.fr/2020/12/fd8a25a0-mysql.svg', alt: 'MySQL', href: 'https://www.mysql.com/' },
  { src: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png', alt: 'nodeJS', href: 'https://nodejs.org/en/' },
  { src: 'https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png', alt: 'Sequelize', href: 'https://sequelize.org/' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png', alt: 'Sass', href: 'https://sass-lang.com/' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png', alt: 'Xcode', href: 'https://apps.apple.com/fr/app/xcode/id497799835' },
  { src: 'https://seeklogo.com/images/G/google-play-store-logo-A9F117BED5-seeklogo.com.png', alt: 'Playstore', href: 'https://play.google.com/store/apps?hl=fr&gl=US' },
  { src: 'https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_App_Store_d%27Apple.png', alt: 'Appstore', href: 'https://www.apple.com/fr/app-store/' },
  { src: 'https://sdtimes.com/wp-content/uploads/2016/05/0517.sdt-gradle.png', alt: 'Gradle', href: 'https://gradle.org/' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png', alt: 'Kotlin', href: 'https://kotlinlang.org/' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', alt: 'PostGresSQL', href: 'https://www.postgresql.org/',title: 'PostgresSQL'}
];

const About = () => (
  <div className="anchor" id="about">
    <a href="/#home" id="home" aria-label="home">&nbsp;</a>

    <section className="container-fluid preface__background--color preface__section mb-5">
      <div className="row justify-content-end align-items-center preface">
        <div className="col-sm-5 text-center">
          <div className="text-center py-5" id="blocAbout">
            <Image type="image/webp" className="roundedCircle" id="photoAbout" alt="photo de Lucas" src={Portrait} height={170} width={170} />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 text-center text-md-center home__title shadow border" id="blocTextAbout">
        <h2 className="preface__title h1 preface__surname display-3" id="nomAbout">Lucas</h2>
        <h1 className="preface__title h1 preface__surname display-3" id="nomAbout">Lengrand</h1>

        <Texteffect className="col-12 col-md-12 preface--color text-justify mb-5 preface_logoBot font-monospace text-center text-md-center" />

        <p className="col-10 offset-1 offset-md-0 col-md-12 my-4 preface--color text-justify preface__logoBot" id="descriptionAbout">
          Depuis toujours passionné par les systèmes informatiques et notamment le <b>Développement Informatique</b>, je vous accompagnerai dans vos différents projets <b>numériques</b> ou la création de vos <b>applications web</b>.
        </p>

        <div className="col-10 col-md-13 preface--color text-justify mb-5 preface__logoBot text-center text-md-start" id="codeAbout">
          {technologies.map((tech, index) => (
            <TechIcon key={index} src={tech.src} alt={tech.alt} title={tech.title} href={tech.href} />
          ))}
        </div>

        <ButtonHomeDownload
          className="btn btn-light shadow preface__logoBot"
          id="bouttonCV"
          text="CV"
          href={resume}
          download="CV de Lucas Lengrand"
        />
      </div>
    </section>
  </div>
);

export default About;
