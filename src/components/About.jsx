import React from 'react'
import resume from '../img/Lengrand Lucas.pdf'
import { Image } from 'react-bootstrap'
import Portrait from '../img/Portrait.webp'
import ButtonHomeDownload from './ButtonHomeDownload';
import Texteffect from './Texteffect';

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
            <Texteffect className="col-12 col-md-12 preface--color text-justify mb-5 preface_logoBot font-monospace text-center text-md-center" />
            <p className="col-10 offset-1 offset-md-0 col-md-12 my-4 preface--color text-justify preface__logoBot" id="descriptionAbout">
                Depuis toujours passionné par les systèmes informatiques et notamment le <b>Développement Informatique</b>, je vous accompagnerai dans vos différents projets <b>numériques</b> ou la création de vos <b>applications web</b>.
            </p>
            <p className="col-12 col-md-12 preface--color text-justify mb-5 preface__logoBot text-center text-md-start" id="codeAbout">
            <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics" > <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height={25} alt="HTMLIcon" /></a> | 
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" ><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Css Logo" width={25} /></a> | 
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" ><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript Logo" height={25}/></a> |
            <a href="https://www.mongodb.com/"><img src="https://www.svgrepo.com/show/331488/mongodb.svg" height={25} alt="mongoDB logo" /></a> |
            <a href="https://www.mysql.com/"><img src="https://cdn2.boryl.fr/2020/12/fd8a25a0-mysql.svg" height={25} alt="mySQL logo"/></a>|  
            <a href="https://reactjs.org/" ><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height={25} alt="ReactLogo" /></a>| 
            <a href="https://nodejs.org/en/"><img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" height={25}  alt= "nodeJS logo"/></a> | 
            <a href="https://sequelize.org/" ><img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" height={25} alt="Sequelize logo" /></a> |
            <a href="https://sass-lang.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" height={25} alt="sass" /> </a>  |
            <a href="https://reactnative.dev/"><img src="https://devtop.io/wp-content/uploads/2022/10/react-native-1.png" height={25} alt="React Native" /></a> |
            <a href="https://apps.apple.com/fr/app/xcode/id497799835"><img src="https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png" height={25} alt="Xcode" /> </a> |
            <a href="https://play.google.com/store/apps?hl=fr&gl=US"><img src="https://seeklogo.com/images/G/google-play-store-logo-A9F117BED5-seeklogo.com.png" height={25} alt="Playstore" /> </a> |
            <a href="https://www.apple.com/fr/app-store/"><img src="https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_App_Store_d%27Apple.png" height={25} alt="Appstore" /> </a> | 
            <a href="https://gradle.org/"><img src="https://sdtimes.com/wp-content/uploads/2016/05/0517.sdt-gradle.png" height={25} alt="Gradle" /> </a> |
            <a href="https://kotlinlang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" height={25} alt="Kotlin" /> </a>


            </p>
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
