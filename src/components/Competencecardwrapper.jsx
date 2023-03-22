import React from 'react'
import CompetenceCard from'./Competencecard'
import projects from '../helper/projects'

const CompetenceCardWrapper = () => {
  return (
    <section className='container px-4' id='CompetenceCardWrapper'>
        <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>
        <CompetenceCard
        title={projects.Netflix.title}
        details={projects.Netflix.details}
        stackIcons={projects.Netflix.stackIcons}
        linkGithub={projects.Netflix.linkGithub}
        linkDemo={projects.Netflix.linkDemo}
        imageSRC={projects.Netflix.imagesSrc}
        ></CompetenceCard>
        <CompetenceCard 
       title={projects.groupomania.title}
       details={projects.groupomania.details} 
       stackIcons={projects.groupomania.stackIcons} 
       linkGithub={projects.groupomania.linkGithub}
       linkDemo={projects.groupomania.linkDemo}
       imageSRC={projects.groupomania.imageSRC}
       ></CompetenceCard>
       <CompetenceCard
       title={projects.kanap.title}
       details={projects.kanap.details}
       stackIcons={projects.kanap.stackIcons}
       linkGithub={projects.kanap.linkGithub}
       linkDemo={projects.kanap.linkDemo}
       imageSRC={projects.kanap.imageSRC}
       ></CompetenceCard>
        <CompetenceCard 
       title={projects.piquante.title}
       details={projects.piquante.details} 
       stackIcons={projects.piquante.stackIcons} 
       linkGithub={projects.piquante.linkGithub}
       linkDemo={projects.piquante.linkDemo}
       imageSRC={projects.piquante.imageSRC}
       ></CompetenceCard>
       <CompetenceCard 
       title={projects.omf.title}
       details={projects.omf.details} 
       stackIcons={projects.omf.stackIcons} 
       linkGithub={projects.omf.linkGithub}
       linkDemo={projects.omf.linkDemo}
       imageSRC={projects.omf.imageSRC}
       ></CompetenceCard> 
        </div> 
    </section>
  )
}

export default CompetenceCardWrapper