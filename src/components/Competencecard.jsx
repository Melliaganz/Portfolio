import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CompetenceCard= ({title, details, imageSRC, stackIcons, linkDemo, linkGithub}) => {
    return (
        <div className='col-md-6 col-sm-7 cardInline'>
            <div className='card card-cover  h-100 overflow-hidden rounded-4 shadow ' style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255,0.5) 0%, rgba(255, 255, 255,1) 20%), url(${imageSRC})`}}>
               <div className='d-flex flex-column h-100 p-5 pb-3 text-shadow'>
                <h2 className='pt-5 mt-3 h3 mb-5 card__title--color text-uppercase'>{title ? title: null}</h2>
                <div className='overflow-scroll mb-3' style={{maxHeight:"250px"}}>{details}</div>
                <div className='d-flex justify-content-start flex-wrap mt-auto'>
                    {stackIcons?
                        stackIcons.map(icon =>(
                            <img className='me-3 my-1' src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
                        )) : null
                        }
                </div>
                <footer className='card-footer justify-content-evenly d-flex bg-transparent border-top-0 px-0 pt-3'>
                    <a className="btn btn-light btn-base rounded-4 border-warning shadow col-auto preface__logoBot" href={linkDemo} rel="noreferrer" target='_blank' aria-label="lien de démonstration" text='Demo'><PlayArrowIcon /> Demo </a>    
                    <a className="btn btn-light btn-base rounded-4 border-warning shadow col-auto preface__logoBot" href={linkGithub} rel="noreferrer" target='_blank' aria-label='Lien vers le repo Github' text='Github'><GitHubIcon /> Github </a>
                </footer>
                </div> 
            </div>
        </div>
    )
}

export default CompetenceCard