import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

function Socials() {
  return (
    <div className='socials'>
        <a href="https://twitter.com/LucasLengrand2" 
        alt="Twitter"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter">
            <TwitterIcon /> 
        </a>
        <a href="http://www.linkedin.com/in/LucasLengrand"
        alt="linkedin"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='linkedin'>
            <LinkedIn />
        </a>
        <a href="https://github.com/Melliaganz"
        alt="github"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
            <GitHub />
        </a>
        <a href="mailto:lucaslengranddev@gmail.com" 
        alt="mail"
        loading="lazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email">
            <Email />
        </a>
    </div>
  )
}

export default Socials