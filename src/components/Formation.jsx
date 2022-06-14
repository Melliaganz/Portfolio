import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Image } from 'react-bootstrap'

import OC from '../img/OC.webp'

export default function Formation() {
  return (
    <div class="g-0 anchor">
        <a href="/#formations" id="formations">&nbsp;</a>
        <section class="formations__background--color border-start row g-0">
            <div class="p-0 m-0">
                <h3 class="text-center formations__title--color my-5 text-uppercase">
                    <span class="underline__title">
                        Formations
                    </span>
                </h3>
                <div class="row g-0 mb-5">
                    <section class="col-lg-3 text-center mx-auto me-lg-0 my-auto">
                        <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                            <Image type="image/webp"alt='PhotoOpenClassroom' src={OC} width={50} />
                        </div>
                        <h3 class="h4 formation__title">
                            <a href="https://openclassrooms.com/fr/">
                            Open
                            <wbr />
                            Classrooms
                            </a>
                        </h3>
                        <h4 class="h6 formation__title">Developpeur Web</h4>
                        <p class="formation__title">Mai 2022, Paris</p>
                    </section>
                    <div class="col-8 formation__title my-auto me-lg-0 mx-auto">
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
                    </div>
                    <div class="accordion">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Typography>
                                    <Image 
                                    src="https://www.csrsaguenay.qc.ca/wp-content/uploads/2020/02/Logo_CFP-Grand-Fjord-150x150.png"
                                    alt="logo-CFP"
                                    width={50} />
                                    Centre de formation professionnelle du Grand-Fjord
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div class="row g-0">
                                    <section class="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                        <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                            <Image
                                            src="https://www.csrsaguenay.qc.ca/wp-content/uploads/2020/02/Logo_CFP-Grand-Fjord-150x150.png"
                                            alt="logo-CFP"
                                            width={100}
                                            />
                                            <h3 class="h4 formation__title">
                                                <a href="http://www.cfpsaguenay.qc.ca/">
                                                Centre de formation professionnelle du Grand-Fjord
                                                </a>
                                            </h3>
                                            <h4 class="h6 formation__title">
                                                Etudiant, Protection et exploitation des territoires fauniques
                                            </h4>
                                            <p class="formation__title">
                                                Septembre 2021, La Baie, Saguenay, QC, Canada
                                            </p>
                                        </div>
                                    </section>
                                    <div class="col-8 formation__title my-auto me-lg-0 mx-auto">
                                      <ul>
                                        <li> cul</li>  
                                      </ul>  
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                                <Typography>
                                    <Image 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Paris_VIII.svg/langfr-1920px-Paris_VIII.svg.png" 
                                    alt="logo-ParisVIII" 
                                    width={80} />
                                    Université Paris 8
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div class="row g-0">
                                        <section class="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                            <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                                <Image 
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Paris_VIII.svg/langfr-1920px-Paris_VIII.svg.png"
                                                alt="logo-ParisVIII"
                                                width={100}
                                                />
                                                <h3 class="h4 formation__title">
                                                   <a href="https://www.univ-paris8.fr/">
                                                       Université de Paris 8
                                                   </a>
                                                </h3>
                                                <h4 class="h6 formation__title">
                                                    Master, Musicologie
                                                </h4>
                                                <p class="formation__title">
                                                    Juillet 2019, Vincennes-Saint-Denis
                                                </p>
                                            </div>
                                        </section>
                                        <div class=" col-8 formation__title my-auto me-lg-0 mx-auto">
                                            <ul>
                                                <li>Mobiliser une culture artistique et les principales méthodes pour étudier les phénomènes musicaux</li>
                                                <li>Identifier l'évolutoin des formes et des genres, l'histoire des institutions, des lieux, des formations et du répertoire</li>
                                                <li>Porter une réfléxion théorique et critique portant sur les phénomènes musicaux</li>
                                                <li>Analyser dans les grandes lignes une œuvre musicale ou un extrait sur la base de l'écoute </li>
                                                <li>Caractériser et valoriser son identité, ses compétences et son projet professionnel en fonction d'un contexte</li>
                                                <li>Identifier et situer les champs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary 
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header">
                                <Typography>
                                    <Image 
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/07/SAE_Institute_Logo.png" 
                                    alt="logo-SAE"
                                    width={50} />
                                    SAE Institute
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <Typography>
                                            <div class="row g-0">
                                                <section class="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                                    <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                                        <Image 
                                                        src="https://upload.wikimedia.org/wikipedia/commons/0/07/SAE_Institute_Logo.png"
                                                        alt="logo-SAE"
                                                        width={100}
                                                        />
                                                    </div>
                                                    <h3 class="h4 formation__title">
                                                        <a href="https://www.sae.edu/fra/"> SAE Institute</a>
                                                    </h3>
                                                    <h4 class="h6 formation__title">
                                                        Licence, Technicien son
                                                    </h4>
                                                    <p class="formation__title">
                                                        Juillet 2017, Aubervilliers
                                                    </p>
                                                </section>
                                                <div class="col-8 formation__title my-auto me-lg-0 mx-auto">
                                                    <ul>
                                                        <li>Gérer la prise de son lors d'un enregistrement sonore</li>
                                                        <li>Editer un son </li>
                                                        <li>Mixer un son</li>
                                                        <li>Organiser les moyens techniques d'une prestation sonore(spectacle, tournage, broadcast [TV, radio, réseaux sociaux])</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                            </Accordion>
                            <Accordion >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                            >
                                <Typography><Image src="https://static.wixstatic.com/media/7903c0_543cb7973543494a837043b5eb302721~mv2.png/v1/fill/w_296,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7903c0_543cb7973543494a837043b5eb302721~mv2.png" alt="logo-BTMM" width={50} /> Brevet de Technicien des métiers de la musique</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div class="row g-0 ">
                                    <section class="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                        <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                            <Image src="https://static.wixstatic.com/media/7903c0_543cb7973543494a837043b5eb302721~mv2.png/v1/fill/w_296,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7903c0_543cb7973543494a837043b5eb302721~mv2.png" alt="PhotoBTMM" width={70}/>
                                        </div>
                                        <h3 class="h4 formation__title">
                                            <a href="https://btmmsevres.wixsite.com/btmmsevres" >Brevet de Technicien des métiers de la musique</a>
                                        </h3>
                                        <h4 class="h6 formation__title"
                                        >Brevet de technicien
                                        </h4>
                                        <p class="formation__title">
                                            Juillet 2015, Sèvres
                                        </p>
                                    </section>
                                    <div class="col-8 formation__title my-auto me-lg-0 mx-auto">
                                        <ul>
                                            <li>Théorie Musicale</li>
                                            <li>Solfège</li>
                                            <li>Transposition d'instruments</li>
                                            <li>Utilisation de ProTools <Image src="https://upload.wikimedia.org/wikipedia/commons/4/49/PT2019.png" alt="logo-ProTools" width={20}/> 
                                            </li>
                                            <li>Utilisation de logiciel bureautique (Word 
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Word_2013-2019_logo.svg" 
                                                alt="logo-word" 
                                                width={20}/>
                                                , Excel 
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" 
                                                alt="logo-excel" 
                                                width={20}/>
                                                , PowerPoint <Image src="https://upload.wikimedia.org/wikipedia/commons/1/16/Microsoft_PowerPoint_2013-2019_logo.svg" alt="logo-Powerpoint" width={20} /> )
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}