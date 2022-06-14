import React from 'react'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import { Image } from 'react-bootstrap'

import Portrait from '../img/Portrait.webp'

export default function About() {
  return (
    <section className='container-fluid preface__background--color preface__section'>
        <div class="row justify-content-center align-items-center preface">
            <div className='col-12 col-sm-6 text-center'>
                <div class="text-center my-auto">
                    <Image type='image/webp'class='roundedCircle' src={Portrait} width={170}/>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 text-center text-md-start home__title">
        <a href='#portrait'>
              <div>
                <h2 className='preface__title h1 preface__surname display-3'>
                  Lucas
                </h2>
              </div>
              <div>
                <h1 className='preface__title h1 preface__surname display-3'>
                  Lengrand
                </h1>
              </div>
            </a>
            <p class="col-12 col-md-10 preface--color text-justify mb-5 preface_logoBot font-monospace text-center text-md-start">Développeur web</p>
            <p class="col-10 offset-1 offset-md-0 col-md10 my-4 preface--color text-justify preface__logoBot">
                Depuis toujours passionné par les systèmes informatiques et notammenet le <b>Développement Informatique</b>, je vous accompagnerai dans vos différents projets <b>digitales</b> ou la création de vos <b>applications web</b>.
            </p>
            <p class="col-12 col-md-12 preface--color text-justify mb-5 preface__logoBot font-monospace text-center text-md-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height={25} alt={<HtmlIcon />} /> <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics" >HTML</a> | 
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt={<CssIcon />} height={25} /> <a href="https://developer.mozilla.org/fr/docs/Web/CSS" >CSS</a> | 
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt={<JavascriptIcon />} height={25} /> <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" >JavaScript</a> | 
            <img src="https://www.svgrepo.com/show/331488/mongodb.svg" height={25} alt={<StorageIcon />} /><a href="https://www.mongodb.com/"> MongoDB</a> |
            <img src="https://cdn-icons-png.flaticon.com/512/528/528260.png" height={25} alt={<StorageIcon />}/> <a href="https://www.mysql.com/"> MySQL</a>|  
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height={25} alt="ReactLogo" /><a href="https://reactjs.org/" > React.js</a>| 
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" height={25} alt={<ApiIcon />} /> <a href="https://nodejs.org/en/"> Node.js</a> | 
            <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" height={25} alt="ORM" /> <a href="https://sequelize.org/" > Sequelize</a> |
            <img src="https://sass-lang.com/assets/img/styleguide/seal-color-reversed-c50d9b78.png" height={25} alt="" /> <a href="https://sass-lang.com/"> Sass</a> </p>
            <a class="btn btn-light btn-base rounded-4 border-warning shadow col-auto preface__logoBot" href="#home"><span class="h5">
                CV <CloudDownloadIcon />
                </span>
                </a>
        </div>
        <div class="row justify-content-center mb-5 preface__logoBot">
            <hr class="col my-auto hr__left">
            
            </hr>
        </div>
    </section>
  )
}
