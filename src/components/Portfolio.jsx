import CompetencecardWrapper from "./Competencecardwrapper"

export default function Portfolio() {
  return (
    <div className="g-0 anchor">
      <a href="/#portfolio" id="portfolio" aria-label='portfolio'>&nbsp;</a>
      
        <section className="formations__background--color portfolio__image row g-0 ">
          <div className="p-0 m-0">
            <h1 className="h1 text-center formations__title--color my-5 text-uppercase">
              <span className="title">portfolio</span>
            </h1>
            <div className="row g-0 mb-5" >
              <CompetencecardWrapper />
            </div>
          </div>
        </section>
      
    </div>
  );
};
