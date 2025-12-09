import { useState, useMemo } from 'react'; 
import CompetenceCard from './Competencecard';
import projects from '../helper/projects';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ITEMS_PER_PAGE = 3;

const CompetenceCardWrapper = () => {
    const [currentPage, setCurrentPage] = useState(0);


    const totalProjects = useMemo(() => Object.keys(projects).length, []);
    
    const totalPages = useMemo(() => Math.ceil(totalProjects / ITEMS_PER_PAGE), [totalProjects]);

    const startIndex = currentPage * ITEMS_PER_PAGE;

    const selectedProjects = useMemo(() => 
        Object.values(projects).slice(startIndex, startIndex + ITEMS_PER_PAGE),
        [startIndex]
    );


    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    return (
        <section className="container px-4" id="CompetenceCardWrapper">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {selectedProjects.map((project, index) => (
                    <CompetenceCard 
                        key={startIndex + index}
                        {...project} 
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center pagination-controls">
                
                <button 
                    className="btn btn-light btn-base text-dark rounded-4 shadow col-auto preface__logoBot"
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 0}
                    aria-label={`Page Précédente (Page ${currentPage} sur ${totalPages})`}
                >
                    {<ArrowBackIcon />}
                </button>
                
                <span className="mx-3 my-auto text-dark fw-bold">
                    {currentPage + 1} / {totalPages}
                </span>

                <button 
                    className="btn btn-light btn-base text-dark rounded-4 shadow col-auto preface__logoBot"
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages - 1}
                    aria-label={`Page Suivante (Page ${currentPage + 2} sur ${totalPages})`}
                >
                    {<ArrowForwardIcon/>}
                </button>
            </div>
        </section>
    );
};

export default CompetenceCardWrapper;

