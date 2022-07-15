import React from 'react'
import CompetencecardWrapper from "./Competencecardwrapper"

export default function Portfolio() {
  return (
    <div className="g-0 anchor">
      <a href="/#portfolio" id="portfolio">&nbsp;</a>
      
        <section className="formations__background--color border-start portfolio__image row g-0 ">
          <div className="p-0 m-0">
            <h3 className="h1 text-center formations__title--color my-5 text-uppercase">
              <span className="underline__title">portfolio</span>
            </h3>
            <div className="row g-0 mb-5" >
              <CompetencecardWrapper />
            </div>
          </div>
        </section>
      
    </div>
  );
};
