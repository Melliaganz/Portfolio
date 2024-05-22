import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CompetenceCard = ({ title, details, imageSRC, stackIcons, linkDemo, linkGithub, linkProjet, year }) => {
    return (
        <div className='col-md-6 col-sm-7 cardInline'>
            <div className='card card-cover h-100 overflow-hidden rounded-4 shadow' id="backgroundImg" style={{ backgroundImage: `url(${imageSRC})` }}>
                <div className='d-flex flex-column h-100 p-5 pb-3 text-shadow'>
                    {title && <h2 className='pt-5 mt-3 h3 mb-5 card__title--color text-uppercase'>{title}</h2>}
                    {year ? <div className='overflow-scroll mb-3' style={{ maxHeight: "250px" }}>{year}</div> : null}
                    <div className='overflow-scroll mb-3' style={{ maxHeight: "250px" }} id="scrollbarOverflow">{details}</div>
                    <div className='d-flex justify-content-center flex-wrap mt-auto'>
                        {stackIcons?.map((icon, index) => (
                            <img key={index} className='me-3 my-1' src={icon.icon} alt={icon.alt || 'stack icon'} width={icon.width} height={icon.height} title={icon.title} />
                        ))}
                    </div>
                    <footer className='card-footer justify-content-evenly d-flex bg-transparent border-top-0 px-0 pt-3'>
                       {linkProjet || linkDemo ? <a className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot" href={linkDemo ? linkDemo : linkProjet} rel="noopener noreferrer" target='_blank' aria-label={linkDemo ? "lien de démonstration" : "lien vers le projet"} title={linkDemo ? 'Démonstration du site' : 'Lien vers le projet'}>
                            <PlayArrowIcon /> {linkDemo ? 'Demo' : 'Lien vers le projet'}
                        </a> : null}
                        {linkGithub ? <a className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot" href={linkGithub} rel="noopener noreferrer" target='_blank' aria-label='Lien vers le repo Github' title="repo Github"><GitHubIcon /> Github</a> : null}
                    </footer>
                </div>
            </div>
        </div>
    );
}

CompetenceCard.propTypes = {
    title: PropTypes.any.isRequired,
    year: PropTypes.string,
    details: PropTypes.object.isRequired,
    imageSRC: PropTypes.string.isRequired,
    stackIcons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        alt: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    linkDemo: PropTypes.string,
    linkGithub: PropTypes.string,
    linkProjet: PropTypes.string
};

CompetenceCard.defaultProps = {
    stackIcons: [],
    linkDemo: '',
    linkGithub: '',
    linkProjet: ''
};

export default CompetenceCard;
