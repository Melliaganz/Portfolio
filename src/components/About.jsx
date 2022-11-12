import React from 'react'
import resume from '../img/CV de Lucas Lengrand.pdf'
import { Image } from 'react-bootstrap'

import Portrait from '../img/Portrait.webp'
import ButtonHomeDownload from './ButtonHomeDownload';

export default function About() {
  return (
    <div className='anchor'>
      <a href="/#home" id='home' aria-label='home'>&nbsp;</a>
    <section id="about"className='container-fluid preface__background--color preface__section mb-5 '>
        <div className="row justify-content-end align-items-center preface">
            <div className='col-sm-5 text-center'>
                <div className="text-center  py-5" id="blocAbout">
                    <Image type='image/webp'className='roundedCircle' id="photoAbout" alt='photo de Lucas' src={Portrait} height={170} width={170}/>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 text-center text-md-center home__title shadow border" id="blocTextAbout">
              <div>
                <h2 className='preface__title h1 preface__surname display-3' id="nomAbout">
                  Lucas
                </h2>
              </div>
              <div>
                <h1 className='preface__title h1 preface__surname display-3' id="nomAbout">
                  Lengrand
                </h1>
              </div>
            <p className="col-12 col-md-12 preface--color text-justify mb-5 preface_logoBot font-monospace text-center text-md-center">Développeur web</p>
            <p className="col-10 offset-1 offset-md-0 col-md-12 my-4 preface--color text-justify preface__logoBot" id="descriptionAbout">
                Depuis toujours passionné par les systèmes informatiques et notamment le <b>Développement Informatique</b>, je vous accompagnerai dans vos différents projets <b>numériques</b> ou la création de vos <b>applications web</b>.
            </p>
            <p className="col-12 col-md-12 preface--color text-justify mb-5 preface__logoBot text-center text-md-start" id="codeAbout">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height={25} width={25} alt="HTMLIcon" /> <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics" >HTML</a> | 
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Css Logo" height={25} width={25} /> <a href="https://developer.mozilla.org/fr/docs/Web/CSS" >CSS</a> | 
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript Logo" height={20.65625} width={18.75} /> <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" >JavaScript</a> | 
            <img src="https://www.svgrepo.com/show/331488/mongodb.svg" height={25} width={25} alt="mongoDB logo" /><a href="https://www.mongodb.com/"> MongoDB</a> |
            <img src="https://cdn-icons-png.flaticon.com/512/528/528260.png" height={25} width={25} alt="mySQL logo"/> <a href="https://www.mysql.com/"> MySQL</a>|  
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height={25} width={25} alt="ReactLogo" /><a href="https://reactjs.org/" > React.js</a>| 
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" height={18.75} width={16.625} alt= "nodeJS logo"/> <a href="https://nodejs.org/en/"> Node.js</a> | 
            <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" height={18.75} width={16.25} alt="Sequelize logo" /> <a href="https://sequelize.org/" > Sequelize</a> |
            <img src="https://sass-lang.com/assets/img/styleguide/seal-color-reversed-c50d9b78.png" height={25} width={25} alt="sass logo" /> <a href="https://sass-lang.com/"> Sass</a> </p>
            <ButtonHomeDownload
            className='btn btn-light shadow preface__logoBot'
            id="bouttonCV"
            text='CV'
            href={resume}
            download='CV de Lucas Lengrand'
            />
        </div>
    </section>
    </div>
  )
}
