import Header from './Common/Header';
import img from '../assets/img/city-street.jpg';
import Timeline from './Common/Timeline';
import SEO from '../Common/SEO';

const About = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Dariusz Szyca',
    description: 'Learn about Dariusz Szyca\'s journey from Junior to Senior Test Automation Engineer',
    mainEntity: {
      '@type': 'Person',
      name: 'Dariusz Szyca',
      jobTitle: 'Senior Test Automation Engineer',
      description: 'Started as a Junior Software Test Automation Engineer in 2019, now a Senior leading test automation teams.',
    },
  };

  return (
    <div>
      <SEO
        title="About Me"
        description="Learn about Dariusz Szyca's journey from Junior to Senior Test Automation Engineer. ISTQB certified professional with experience at EPAM Systems and Amazon."
        url="/about"
        keywords="About Dariusz Szyca, Test Automation Journey, ISTQB, EPAM Systems, Amazon, Software Tester Career"
        structuredData={structuredData}
      />
      <Header title="About Us!" subtitle="IT'S ME!" img={img} />
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                How I became a Software Tester.
              </h3>
            </div>
          </div>
          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default About;
