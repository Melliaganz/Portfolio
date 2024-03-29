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
    <div className="g-0 anchor" id="formationsBlock">
        <a href="/#formations" id="formations" aria-label='formation'>&nbsp;</a>
        <section className="formations__background--color row g-0 ">
            <div className="p-5 m-0">
                <h3 className="h1 text-center formations__title--color my-5 text-uppercase">
                    <span className="title">
                        Formations
                    </span>
                </h3>
                <div className="row g-0 mb-0">
                    <section className="col-lg-2 text-center mx-auto me-lg-0 my-auto">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                            <Image type="image/webp"alt='PhotoOpenClassNameroom' src={OC} width={50} height={50} />
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
                    <figcaption className="blockquote-footer">
                        <cite title="Source Title">Commentaires du jury </cite>
                    </figcaption>
                    </div>

                    
                    <div className="accordion shadow " id="accordionBlock">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image 
                                    src="https://www.csrsaguenay.qc.ca/wp-content/uploads/2020/02/Logo_CFP-Grand-Fjord-150x150.png"
                                    alt="logo-CFP"
                                    width={50}
                                    height={50}
                                     />
                                    Centre de formation professionnelle du Grand-Fjord
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component= {'span'} variant={'body2'}>
                                <div className="row g-0">
                                    <section className="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                            <Image
                                            src="https://www.csrsaguenay.qc.ca/wp-content/uploads/2020/02/Logo_CFP-Grand-Fjord-150x150.png"
                                            alt="logo-CFP"
                                            width={100}
                                            height={100}
                                            />
                                            <h3 className="h4 formation__title">
                                                <a href="http://www.cfpsaguenay.qc.ca/" title="Site du CFP" target="_blank" rel="noopener noreferrer" >
                                                Centre de formation professionnelle du Grand-Fjord
                                                </a>
                                            </h3>
                                            <h4 className="h6 formation__title">
                                                Etudiant, Protection et exploitation des territoires fauniques
                                            </h4>
                                            <p className="formation__title">
                                                Septembre 2021, La Baie, Saguenay, QC, Canada
                                            </p>
                                        </div>
                                    </section>
                                    <div className="col-8 formation__title my-auto me-lg-0 mx-auto">
                                      <ul>
                                        <li>Situation au regard du métier et de la démarche de formation</li>  
                                        <li>Application des régles de santé et sécurité au travail</li>  
                                        <li>Utilisation du matériel, de l'outillage et de l'équipement</li>  
                                        <li>Assistance aux personnes en difficulté</li>  
                                        <li>Utilisation du gaz propane</li>  
                                        <li>Préparation des équipements, des bâtiments et des infrastuctures</li>  
                                        <li>Application des notions de biologie animale</li>  
                                        <li>Identification des espèces fauniques</li>  
                                        <li>Interprétation des lois et règlements relatifs à la conservation de la faune</li>  
                                        <li>Utilisation d'arme de chasse</li>  
                                        <li>Communication en milieu de travail</li>  
                                        <li>Gestion d'un poste d'accueil - Service à la clientèle</li>  
                                        <li>Survie en forêt</li>  
                                        <li>Orientation en forêt</li>  
                                        <li>Déplacement non motorisé en forêt - Été (manuel et brevet)</li>  
                                        <li>Déplacement non motorisé en forêt - Hiver</li>  
                                        <li>Patrouille du territoire</li>  
                                        <li>Enquête</li>  
                                        <li>Notion d'écologie forestière</li>  
                                        <li>Assistance aux spécialistes en aménagement faunique</li>  
                                        <li>Pathologie animale</li>  
                                        <li>Techniques de pêche</li>  
                                        <li>Techniques de chasse et piégeage</li>  
                                        <li>Accompagnement des usagers</li>  
                                        <li>Recherche d'emploi</li>  
                                        <li>Stage d'intégration</li> 
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
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image 
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/07/SAE_Institute_Logo.png" 
                                    alt="logo-SAE"
                                    width={42.5}
                                    height={32.5} />
                                    SAE Institute
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component= {'span'} variant={'body2'}>
                                            <div className="row g-0">
                                                <section className="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                                    <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                                        <Image 
                                                        src="https://upload.wikimedia.org/wikipedia/commons/0/07/SAE_Institute_Logo.png"
                                                        alt="logo-SAE"
                                                        width={170}
                                                        height={130}
                                                        />
                                                    </div>
                                                    <h3 className="h4 formation__title">
                                                        <a href="https://www.sae.edu/fra/" title="Site de la SAE" target="_blank" rel="noopener noreferrer" > SAE Institute</a>
                                                    </h3>
                                                    <h4 className="h6 formation__title">
                                                        Licence, Technicien son
                                                    </h4>
                                                    <p className="formation__title">
                                                        Juillet 2017, Aubervilliers
                                                    </p>
                                                </section>
                                                <div className="col-8 formation__title my-auto me-lg-0 mx-auto">
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
                            <Accordion TransitionProps={{ unmountOnExit:true}} >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header">
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image src="https://file.diplomeo-static.com/file/00/00/01/47/14720.svg" 
                                    alt="logo-BTMM" 
                                    width={50} 
                                    height={50}
                                    /> 
                                    Brevet de Technicien des métiers de la musique</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component= {'span'} variant={'body2'}>
                                    <div className="row g-0 ">
                                    <section className="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                            <Image src="https://file.diplomeo-static.com/file/00/00/01/47/14720.svg" 
                                            alt="PhotoBTMM" 
                                            width={70}
                                            height={70}
                                            />
                                        </div>
                                        <h3 className="h4 formation__title">
                                            <a href="https://btmmsevres.wixsite.com/btmmsevres" title="Site du B.T.M.M" target="_blank" rel="noopener noreferrer" >Brevet de Technicien des métiers de la musique</a>
                                        </h3>
                                        <h4 className="h6 formation__title"
                                        >Brevet de technicien
                                        </h4>
                                        <p className="formation__title">
                                            Juillet 2015, Sèvres
                                        </p>
                                    </section>
                                    <div className="col-8 formation__title my-auto me-lg-0 mx-auto">
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