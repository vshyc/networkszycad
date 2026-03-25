import SinglePortfolio from './SinglePortfolio';
import SEO from '../../Common/SEO';
import { TECHNOLOGIES, FREE_TIME } from '../../../config/portfolio';

const Portfolio = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dariusz Szyca Portfolio',
    description: 'Portfolio showcasing skills in Java, Test Automation, DevOps, and personal interests',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: TECHNOLOGIES.map((tech, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tech.title,
        description: tech.subTitle,
      })),
    },
  };

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Dariusz Szyca's portfolio showcasing expertise in Java, Test Automation, DevOps, and personal interests including running and orienteering."
        url="/portfolio"
        keywords="Portfolio, Java Projects, Test Automation, DevOps, CV, Resume, Skills"
        structuredData={structuredData}
      />
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">My Work</h2>
              <h3 className="section-subheading text-muted">The stuff that I'm working on</h3>
            </div>
          </div>
          <div className="row">
            {TECHNOLOGIES.map((item, index) => (
              <SinglePortfolio {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Free Time</h2>
              <h3 className="section-subheading text-muted">What I am in free time.</h3>
            </div>
          </div>
          <div className="row">
            {FREE_TIME.map((item, index) => (
              <SinglePortfolio {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
