import SinglePortfolio from './SinglePortfolio';
import SEO from '../../Common/SEO';

import img1 from '../../assets/img/portfolio/01-thumbnail.jpg';
import java from '../../assets/img/portfolio/java.jpeg';
import restAssured from '../../assets/img/portfolio/restAssured.png';
import devops from '../../assets/img/portfolio/devops.png';
import family from '../../assets/img/portfolio/family.jpeg';
import run from '../../assets/img/portfolio/run.jpg';
import ino from '../../assets/img/portfolio/ino.jpg';
import img2 from '../../assets/img/portfolio/02-thumbnail.jpg';

const technologies = [
  { title: 'CV', subTitle: 'Education and Work Journey', img: img2, portfolioModal: '/CV' },
  { title: 'Tester', subTitle: 'The Journey', img: img1, portfolioModal: '/about' },
  { title: 'Java', subTitle: 'Main Language', img: java, portfolioModal: '/java' },
  { title: 'TA', subTitle: 'Test Automation', img: restAssured, portfolioModal: '/ta' },
  { title: 'DevOps', subTitle: 'Grow in DevOps', img: devops, portfolioModal: '/devops' },
];

const freeTime = [
  { title: 'Family', subTitle: 'Family is always first', img: family, portfolioModal: '/myFamily' },
  { title: 'Sport', subTitle: 'Running , Cycling, Gym', img: run, portfolioModal: '/running' },
  {
    title: 'Orienteering',
    subTitle: 'Spending time with my Family',
    img: ino,
    portfolioModal: '/orienteering',
  },
];

const Portfolio = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dariusz Szyca Portfolio',
    description: 'Portfolio showcasing skills in Java, Test Automation, DevOps, and personal interests',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: technologies.map((tech, index) => ({
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
            {technologies.map((item, index) => (
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
            {freeTime.map((item, index) => (
              <SinglePortfolio {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
