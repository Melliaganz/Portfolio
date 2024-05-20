import React, { useState } from 'react';
import CompetenceCard from './Competencecard';
import projects from '../helper/projects';

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
        <section className='container px-4' id='CompetenceCardWrapper'>
            <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>
                {selectedProjects.map((project, index) => {
                  console.log('stackIcons',project.stackIcons)
                    return (
                        <CompetenceCard 
                            key={startIndex + index}
                            title={project.title}
                            year={project.year}
                            details={project.details}
                            stackIcons={project.stackIcons}
                            linkDemo={project.linkDemo}
                            linkGithub={project.linkGithub}
                            linkProjet={project.linkProjet}
                            imageSRC={project.imageSRC}
                        />
                    );
                })}
            </div>
            <div className='d-flex justify-content-center' style={{gap: 25}}>
                <button 
                    className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot"
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 0}
                >
                  {'<'}
                </button>
                <button 
                    className="btn btn-light btn-base rounded-4 shadow col-auto preface__logoBot"
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages - 1}
                >
                  {'>'}
                </button>
            </div>
        </section>
    );
}

export default CompetenceCardWrapper;
