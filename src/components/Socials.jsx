import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Socials() {
  return (
    <div className='socials'>
        <a href="https://twitter.com/LucasLengrand2" 
        alt="Twitter"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        title="Twitter">
            <TwitterIcon /> 
        </a>
        <a href="http://www.linkedin.com/in/LucasLengrand"
        alt="linkedin"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='linkedin'
        title="Linkedin">
            <LinkedIn />
        </a>
        <a href="https://github.com/Melliaganz"
        alt="github"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Github">
            <GitHub />
        </a>
        <a href="mailto:lucaslengranddev@gmail.com" 
        alt="mail"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Email">
            <Email />
        </a>
        <a href="https://www.instagram.com/melliaganz/"
        alt="instagram"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='Instagram'
        title="Instagram">
            <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/LucasLeatherhoff/"
        alt="facebook"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='Facebook'
        title="Facebook">
            <FacebookIcon />
        </a>
        <a href="https://discord.com/users/Melliaganz#7310"
        alt="discord"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='Discord'
        title="Discord">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" alt="discord logo" height="25px"></img>
        </a>
    </div>
  )
}

export default Socials