import React, { useState } from 'react';
import CompetenceCard from './Competencecard';
import projects from '../helper/projects';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ITEMS_PER_PAGE = 3;

const CompetenceCardWrapper = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(Object.keys(projects).length / ITEMS_PER_PAGE);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedProjects = Object.values(projects).slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section className="container px-4" id="CompetenceCardWrapper">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {selectedProjects.map(({ title, year, details, stackIcons, linkDemo, linkGithub, linkProjet, imageSRC }, index) => (
                    <CompetenceCard 
                        key={startIndex + index}
                        title={title}
                        year={year}
                        details={details}
                        stackIcons={stackIcons}
                        linkDemo={linkDemo}
                        linkGithub={linkGithub}
                        linkProjet={linkProjet}
                        imageSRC={imageSRC}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center" style={{ gap: 25 }}>
                <button 
                    className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot"
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 0}
                    aria-label="Previous Page"
                >
                    {<ArrowBackIcon />}
                </button>
                <button 
                    className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot"
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages - 1}
                    aria-label="Next Page"
                >
                    {<ArrowForwardIcon/>}
                </button>
            </div>
        </section>
    );
};

export default CompetenceCardWrapper;
