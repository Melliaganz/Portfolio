import React from 'react';
import { Image } from 'react-bootstrap';

export const FormationDetails = ({ logo, title, subtitle, date, details, website }) => (
    <div className="row g-0">
        <section className="col-lg-3 text-center mx-auto me-lg-0 my-auto">
            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mb-2">
                <Image src={logo} alt={`logo-${title}`} />
            </div>
            <h3 className="h4 formation__title">
                <a href={website} title={`Site de ${title}`} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <h4 className="h6 formation__title">{subtitle}</h4>
            <p className="formation__title">{date}</p>
        </section>
        <div className="col-8 formation__title my-auto me-lg-0 mx-auto">
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);
