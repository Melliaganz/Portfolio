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
    <div className="g-0 anchor">
        <a href="/#formations" id="formations">&nbsp;</a>
        <section className="formations__background--color border-start row g-0 bg-info bg-gradient">
            <div className="p-0 m-0">
                <h3 className="text-center formations__title--color my-5 text-uppercase">
                    <span className="underline__title">
                        Formations
                    </span>
                </h3>
                <div className="row g-0 mb-5">
                    <section className="col-lg-3 text-center mx-auto me-lg-0 my-auto">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                            <Image type="image/webp"alt='PhotoOpenClassNameroom' src={OC} width={50} />
                        </div>
                        <h3 className="h4 formation__title">
                            <a href="https://openclassrooms.com/fr/paths/556-developpeur-web">
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

                    
                    <div className="accordion ">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-primary bg-gradient'>
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image 
                                    src="https://www.csrsaguenay.qc.ca/wp-content/uploads/2020/02/Logo_CFP-Grand-Fjord-150x150.png"
                                    alt="logo-CFP"
                                    width={50} />
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
                                            />
                                            <h3 className="h4 formation__title">
                                                <a href="http://www.cfpsaguenay.qc.ca/">
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
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className='bg-primary bg-gradient'>
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Paris_VIII.svg/langfr-1920px-Paris_VIII.svg.png" 
                                    alt="logo-ParisVIII" 
                                    width={50} />
                                    Université Paris 8
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component= {'span'} variant={'body2'}>
                                    <div className="row g-0">
                                        <section className="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                                <Image 
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Paris_VIII.svg/langfr-1920px-Paris_VIII.svg.png"
                                                alt="logo-ParisVIII"
                                                width={100}
                                                />
                                                <h3 className="h4 formation__title">
                                                   <a href="https://www.univ-paris8.fr/">
                                                       Université de Paris 8
                                                   </a>
                                                </h3>
                                                <h4 className="h6 formation__title">
                                                    Master, Musicologie
                                                </h4>
                                                <p className="formation__title">
                                                    Juillet 2019, Vincennes-Saint-Denis
                                                </p>
                                            </div>
                                        </section>
                                        <div className=" col-8 formation__title my-auto me-lg-0 mx-auto">
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
                            id="panel3a-header"
                            className='bg-primary bg-gradient'>
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image 
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/07/SAE_Institute_Logo.png" 
                                    alt="logo-SAE"
                                    width={50} />
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
                                                        width={100}
                                                        />
                                                    </div>
                                                    <h3 className="h4 formation__title">
                                                        <a href="https://www.sae.edu/fra/"> SAE Institute</a>
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
                            id="panel4a-header"
                            className='bg-primary bg-gradient'>
                                <Typography component= {'span'} variant={'body2'}>
                                    <Image src="https://static.wixstatic.com/media/7903c0_543cb7973543494a837043b5eb302721~mv2.png/v1/fill/w_296,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7903c0_543cb7973543494a837043b5eb302721~mv2.png" alt="logo-BTMM" width={50} /> 
                                    Brevet de Technicien des métiers de la musique</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component= {'span'} variant={'body2'}>
                                    <div className="row g-0 ">
                                    <section className="col-lg-3 text-center mx-auto me-lg-0 my_auto">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                                            <Image src="https://static.wixstatic.com/media/7903c0_543cb7973543494a837043b5eb302721~mv2.png/v1/fill/w_296,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7903c0_543cb7973543494a837043b5eb302721~mv2.png" alt="PhotoBTMM" width={70}/>
                                        </div>
                                        <h3 className="h4 formation__title">
                                            <a href="https://btmmsevres.wixsite.com/btmmsevres" >Brevet de Technicien des métiers de la musique</a>
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