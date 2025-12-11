import React, { memo } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import discordIcon from "../img/5968756.webp"

const SocialLink = memo(({ href, label, icon }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
));

const Socials = () => {
  const socialLinks = [
    {
      href: "https://twitter.com/LucasLengrand2",
      label: "Twitter",
      icon: <TwitterIcon />
    },
    {
      href: "http://www.linkedin.com/in/LucasLengrand",
      label: "LinkedIn",
      icon: <LinkedIn />
    },
    {
      href: "https://github.com/Melliaganz",
      label: "GitHub",
      icon: <GitHub />
    },
    {
      href: "mailto:lucaslengranddev@gmail.com",
      label: "Email",
      icon: <Email />
    },
    {
      href: "https://www.instagram.com/melliaganz/",
      label: "Instagram",
      icon: <InstagramIcon />
    },
    {
      href: "https://www.facebook.com/LucasLeatherhoff/",
      label: "Facebook",
      icon: <FacebookIcon />
    },
    {
      href: "https://discord.com/users/Melliaganz#7310",
      label: "Discord",
      icon: <img src={discordIcon} alt="Discord" height="25px" className="discord-icon" />
    }
  ];

  return (
    <nav className="socials" role="navigation" aria-label="Social media links">
      {socialLinks.map(({ href, label, icon }) => (
        <SocialLink key={label} href={href} label={label} icon={icon} />
      ))}
    </nav>
  );
};

export default memo(Socials);
